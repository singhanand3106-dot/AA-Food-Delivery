import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout {

  private foodService = inject(FoodService);
  private router = inject(Router);

  cartItems = this.foodService.getCart();

  customer = {
    name: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    payment: 'Cash on Delivery'
  };

  getSubTotal(): number {
    return this.foodService.getTotal();
  }

  getDeliveryCharge(): number {
    return 40;
  }

  getGrandTotal(): number {
    return this.getSubTotal() + this.getDeliveryCharge();
  }

  placeOrder() {

    if (
      !this.customer.name ||
      !this.customer.phone ||
      !this.customer.address ||
      !this.customer.city ||
      !this.customer.pincode
    ) {
      alert('Please fill all details.');
      return;
    }

    this.router.navigate(['/orders']);
  }

}
