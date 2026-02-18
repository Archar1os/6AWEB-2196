import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './custom-form.html',
  styleUrl: './custom-form.css',
})
export class CustomForm {
  customForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.customForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      birthDate: ['', Validators.required],
      address: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10,11}$/)]],
      schoolName: ['', Validators.required],
      guardianName: ['', Validators.required],
      guardianContact: ['', [Validators.required, Validators.pattern(/^[0-9]{10,11}$/)]],
      agree: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.customForm.invalid) {
      this.customForm.markAllAsTouched();
      return;
    }
    this.submitted = true;
    console.log('Student Permit Application:', this.customForm.value);
    this.customForm.reset();
  }

  isInvalid(controlName: string) {
    const control = this.customForm.get(controlName);
    return control?.touched && control?.invalid;
  }
}
