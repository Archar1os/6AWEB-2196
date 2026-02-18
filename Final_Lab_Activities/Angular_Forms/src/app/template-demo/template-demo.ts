import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-demo',
  imports: [FormsModule, CommonModule],
  templateUrl: './template-demo.html',
  styleUrl: './template-demo.css',
})
export class TemplateDemo {
  title = "Template Driven Demo";
  username = "";
  email = "";
  password = "";
  role = "";
  submitted = false;

  OnSubmit(form: NgForm) {
    if (form.valid) {
      this.submitted = true;
      console.log('Form Data:', {
        username: this.username,
        email: this.email,
        password: this.password,
        role: this.role
      });

      form.resetForm();
    }
  }
}
