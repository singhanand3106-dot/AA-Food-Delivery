import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  private foodService = inject(FoodService);

  foods: any[] = [];

  ngOnInit(): void {

    this.foodService.getFoods().subscribe({
      next: (data) => {
        console.log('Home Data:', data);
        this.foods = data.slice(0, 4); // Show first 4 foods
      },
      error: (err) => {
        console.error(err);
      }
    });

  }

}
