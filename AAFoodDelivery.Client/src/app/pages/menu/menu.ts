import { Component, inject } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, JsonPipe],
  template: `
    <h1 style="color:red">INLINE TEMPLATE</h1>

    <p>Foods Length: {{ foods.length }}</p>

    <pre>{{ foods | json }}</pre>
  `
})
export class Menu {

  private foodService = inject(FoodService);

  foods: any[] = [];

  ngOnInit(): void {

    this.foodService.getFoods().subscribe(data => {

      console.log("Received:", data);

      this.foods = data;

      console.log("Assigned:", this.foods);

    });

  }

}
