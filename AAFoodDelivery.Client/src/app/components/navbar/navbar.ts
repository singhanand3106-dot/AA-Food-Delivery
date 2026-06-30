import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  private foodService = inject(FoodService);

  get cartCount(): number {

    return this.foodService.getCart().reduce(
      (total, item) => total + item.quantity,
      0
    );

  }

}
