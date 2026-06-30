import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {

  private foodService = inject(FoodService);

  cartItems = this.foodService.getCart();

  deliveryCharge = 40;

  increase(index: number) {
    this.foodService.increaseQuantity(index);
  }

  decrease(index: number) {
    this.foodService.decreaseQuantity(index);
  }

  remove(index: number) {
    this.foodService.removeFromCart(index);
  }

  getSubTotal(): number {
    return this.foodService.getTotal();
  }

  getGrandTotal(): number {
    return this.getSubTotal() + this.deliveryCharge;
  }

}
