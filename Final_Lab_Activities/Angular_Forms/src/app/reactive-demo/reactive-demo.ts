import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-demo',
  templateUrl: './reactive-demo.html',
  styleUrls: ['./reactive-demo.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class ReactiveDemo{
  roles = ['Admin', 'User'];
  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/[a-zA-Z0-9]{4,12}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)]],
      role: ['Admin', Validators.required],
      gender: ['', Validators.required],
      status: ['', Validators.required],
      comments: ['']
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitted = true;
    console.log('Form submitted:', this.form.value);
    this.form.reset();
  }

  isInvalid(name: string) {
    const control = this.form.get(name);
    return control?.touched && control?.invalid;
  }
}
