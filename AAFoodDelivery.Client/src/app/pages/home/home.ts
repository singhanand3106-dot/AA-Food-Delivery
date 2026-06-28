import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
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

        this.foods = data;

      },

      error: (err) => console.error(err)

    });

  }

}
