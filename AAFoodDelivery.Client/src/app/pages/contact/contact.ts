import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  sendMessage() {

    if (
      !this.contact.name ||
      !this.contact.email ||
      !this.contact.subject ||
      !this.contact.message
    ) {
      alert('Please fill all fields.');
      return;
    }

    alert('Thank you! Your message has been sent.');

    this.contact = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

  }

}
