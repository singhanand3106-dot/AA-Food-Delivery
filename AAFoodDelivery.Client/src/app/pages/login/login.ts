import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  private router = inject(Router);

  email = '';
  password = '';
  showPassword = false;

  login() {

    if (!this.email || !this.password) {
      alert('Please enter email and password.');
      return;
    }

    alert('Login Successful');

    this.router.navigate(['/']);

  }

}
