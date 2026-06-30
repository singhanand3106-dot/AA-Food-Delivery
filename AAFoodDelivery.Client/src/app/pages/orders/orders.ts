import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './orders.html',
  styleUrl: './orders.css'
})
export class Orders {

  private foodService = inject(FoodService);

  orderItems = this.foodService.getCart();

  orderId = 'ORD' + Math.floor(Math.random() * 9000 + 1000);

  orderDate = new Date();

  deliveryCharge = 40;

  downloadInvoice() {

    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("A&A FOOD DELIVERY", 14, 20);

    doc.setFontSize(12);
    doc.text(`Order ID: ${this.orderId}`, 14, 30);
    doc.text(`Date: ${this.orderDate.toLocaleString()}`, 14, 38);

    autoTable(doc, {
      startY: 48,
      head: [['Food Item', 'Qty', 'Price', 'Total']],
      body: this.orderItems.map(item => [
        item.name,
        item.quantity,
        `₹${item.price}`,
        `₹${item.price * item.quantity}`
      ])
    });

    const finalY = (doc as any).lastAutoTable.finalY + 10;

    doc.text(`Subtotal : ₹${this.getSubTotal()}`, 14, finalY);
    doc.text(`Delivery : ₹${this.deliveryCharge}`, 14, finalY + 8);

    doc.setFontSize(14);
    doc.text(`Grand Total : ₹${this.getGrandTotal()}`, 14, finalY + 20);

    doc.save(`Invoice-${this.orderId}.pdf`);

  }

  getSubTotal(): number {
    return this.foodService.getTotal();
  }

  getGrandTotal(): number {
    return this.getSubTotal() + this.deliveryCharge;
  }

}
