import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-join-us',
  imports: [CommonModule, FormsModule],
  templateUrl: './join-us.html',
  styleUrl: './join-us.css',
})
export class JoinUs {
user = {
    firstName: 'Smith Dainielle',
    lastName: 'Romero',
    email: 'slromero@xyz.com',
    institution: 'Holy Angel University'
  };

  formSubmitted = false;

  joinMailingList() {
    alert(`🎉 Welcome ${this.user.firstName}! You've joined our mailing list.`);
  }

  submitForm() {
    this.formSubmitted = true;

    // Reset form after 5 seconds
    setTimeout(() => {
      this.formSubmitted = false;
      // Reset form data
      this.user = {
        firstName: '',
        lastName: '',
        email: '',
        institution: ''
      };
    }, 5000);
  }
}
