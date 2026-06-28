import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodService } from '../../services/food.service';
import { RouterLink } from '@angular/router';

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

  remove(index: number) {

    this.foodService.removeFromCart(index);

  }

  getTotal(): number {

    return this.cartItems.reduce(
      (total, item) => total + item.price,
      0
    );

  }

}
