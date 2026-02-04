import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api-service';
import { TruncatePipe } from '../truncatepipe';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule, TruncatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  name: string = '';
  email: string = '';
  message: string = '';
  submitted: boolean = false;

  onSubmit(form: any) {
    if (form.valid) {
      // Simulate sending data (could be replaced with HttpClient POST)
      console.log('Form submitted:', {
        name: this.name,
        email: this.email,
        message: this.message
      });
      // Show success notification
      this.submitted = true;
      // Reset form fields
      form.resetForm();
      // Hide notification after 3 seconds
      setTimeout(() => {
        this.submitted = false;
      }, 3000);
    }
  }
}
