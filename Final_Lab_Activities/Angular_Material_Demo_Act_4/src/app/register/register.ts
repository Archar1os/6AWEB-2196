import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatButtonModule,
  ],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  userName: string = '';
  email: string = '';
  password: string = '';
  gender: string = '';
  address: string = '';
  birthDate!: Date;
  angularSkillLevel: number = 5;
  minSkillLevel: number = 1;
  maxSkillLevel: number = 10;
  submitted: boolean = false;

  formdata: FormGroup = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    gender: new FormControl('', Validators.required),
    birthDate: new FormControl(null, Validators.required),
    address: new FormControl(''),
    angularSkillLevel: new FormControl(5),
  });

  onClickSubmit(data: {
    userName: string;
    email: string;
    password: string;
    gender: string;
    address: string;
    birthDate: Date;
    angularSkillLevel: number;
  }) {
    this.submitted = true;
    this.userName = data.userName;
    this.email = data.email;
    this.password = data.password;
    this.gender = data.gender;
    this.address = data.address;
    this.birthDate = data.birthDate;
    this.angularSkillLevel = data.angularSkillLevel;

    if (this.formdata.valid) {
      console.log('Form submitted successfully:', this.formdata.value);
    } else {
      console.log('Form has errors.');
    }
  }
}