import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  private router = inject(Router);

  user = {
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  };

  showPassword = false;

  register() {

    if (
      !this.user.name ||
      !this.user.email ||
      !this.user.phone ||
      !this.user.password ||
      !this.user.confirmPassword
    ) {
      alert('Please fill all fields.');
      return;
    }

    if (this.user.password !== this.user.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    alert('Registration Successful');

    this.router.navigate(['/login']);

  }

}
