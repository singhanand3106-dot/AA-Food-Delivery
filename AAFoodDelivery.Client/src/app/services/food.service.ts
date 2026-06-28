import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private http = inject(HttpClient);

  private apiUrl = 'https://localhost:7188/api/Food';

  cart: any[] = [];

  getFoods(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addToCart(food: any) {
    this.cart.push(food);
  }

  getCart() {
    return this.cart;
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
  }

}
