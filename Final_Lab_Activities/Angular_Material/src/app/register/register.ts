import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

// Material Imports
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';

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
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatChipsModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatExpansionModule,
    MatStepperModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  // Theme toggle
  isDarkMode: boolean = false;
  
  // Form data model
  fullName: string = '';
  email: string = '';
  password: string = '';
  gender: string = '';
  address: string = '';
  birthDate!: Date;
  birthPlace: string = '';
  citizenship: string = 'Filipino';
  
  // Student verification
  studentId: string = '';
  schoolName: string = '';
  
  // LTO Specific
  restrictionCode: string = '';
  bloodType: string = '';
  
  // TIN (Optional)
  tinNumber: string = '';
  
  // Medical Information
  medicalClinic: string = '';
  medicalCertDate!: Date;
  
  // Emergency contact
  emergencyName: string = '';
  emergencyContact: string = '';
  emergencyRelation: string = '';
  
  // Payment
  paymentMethod: string = '';
  orNumber: string = '';
  
  // Other
  agreeTerms: boolean = false;
  submitted: boolean = false;
  referenceNumber: string = '';

  // Password strength
  passwordStrength: number = 0;
  passwordFeedback: string = '';

  // Restriction codes (Student Permit usually A, A1, B)
  restrictionCodes: string[] = [
    'A - Motorcycle (w/ sidecar)',
    'A1 - Light Motorcycle (125cc below)',
    'B - Light Vehicle (Car/Van/Jeepney)',
    'B1 - Light Truck (4,500kg below)',
    'B2 - Heavy Truck (above 4,500kg)'
  ];

  // Blood types
  bloodTypes: string[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  // Philippine provinces
  provinces: string[] = [
    'Metro Manila', 'Bulacan', 'Cavite', 'Laguna', 'Rizal', 'Pampanga',
    'Batangas', 'Cebu', 'Davao', 'Iloilo', 'Negros Occidental', 'Pangasinan',
    'Quezon', 'Zamboanga del Sur', 'Other'
  ];

  // Citizenship options
  citizenships: string[] = ['Filipino', 'Dual Citizenship', 'Foreigner'];

  // Payment methods
  paymentMethods: string[] = ['Cash', 'GCash', 'Maya', 'Credit/Debit Card', 'Over-the-Counter'];

  // Emergency relations
  emergencyRelations: string[] = ['Parent', 'Guardian', 'Sibling', 'Relative', 'Friend'];

  // Custom validator for Student ID (simple format)
  studentIdValidator(control: AbstractControl): {[key: string]: boolean} | null {
    if (!control.value) return null;
    const pattern = /^[0-9]{4}-[0-9]{5}$|^[0-9]{9}$/;
    if (!pattern.test(control.value.replace(/\s/g, ''))) {
      return { 'invalidStudentId': true };
    }
    return null;
  }

  // TIN validator (optional format)
  tinValidator(control: AbstractControl): {[key: string]: boolean} | null {
    if (!control.value) return null;
    const pattern = /^[0-9]{3}-[0-9]{3}-[0-9]{3}-[0-9]{3}$|^[0-9]{12}$/;
    if (!pattern.test(control.value.replace(/\s/g, ''))) {
      return { 'invalidTin': true };
    }
    return null;
  }

  // Philippine mobile number validator
  mobileValidator(control: AbstractControl): {[key: string]: boolean} | null {
    if (!control.value) return null;
    const pattern = /^(09|\+639)[0-9]{9}$/;
    if (!pattern.test(control.value.replace(/\s/g, ''))) {
      return { 'invalidMobile': true };
    }
    return null;
  }

  // Birth date validator - born 2006 and below (18+ years old)
  birthDateValidator(control: AbstractControl): {[key: string]: boolean} | null {
    if (control.value) {
      const date = new Date(control.value);
      const year = date.getFullYear();
      if (year > 2006) {
        return { 'invalidYear': true };
      }
    }
    return null;
  }

  // Medical certificate date validator (must be within 6 months)
  medicalDateValidator(control: AbstractControl): {[key: string]: boolean} | null {
    if (control.value) {
      const certDate = new Date(control.value);
      const today = new Date();
      const sixMonthsAgo = new Date();
      sixMonthsAgo.setMonth(today.getMonth() - 6);
      
      if (certDate < sixMonthsAgo) {
        return { 'expiredMedical': true };
      }
    }
    return null;
  }

  // Password strength checker
  checkPasswordStrength(password: string) {
    if (!password) {
      this.passwordStrength = 0;
      this.passwordFeedback = '';
      return;
    }

    let strength = 0;
    
    if (password.length >= 8) strength += 25;
    if (/^[A-Za-z]/.test(password)) strength += 25;
    if (/\d/.test(password)) strength += 25;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 25;

    this.passwordStrength = strength;
    if (strength < 50) this.passwordFeedback = 'Weak';
    else if (strength < 75) this.passwordFeedback = 'Moderate';
    else this.passwordFeedback = 'Strong';
  }

  // Generate reference number
  generateReferenceNumber(): string {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `LTO-SP-${year}${month}-${random}`;
  }

  // Calculate age from birth date
  calculateAge(birthDate: Date): number {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  }

  // Get fee based on restriction code
  getApplicationFee(): number {
    const baseFee = 317.63; // Standard LTO student permit fee
    return baseFee;
  }

  // Form group with validations
  formdata: FormGroup = new FormGroup({
    // Personal Info
    fullName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^[A-Za-z][A-Za-z0-9!@#$%^&*]*$')
    ]),
    gender: new FormControl('', Validators.required),
    birthDate: new FormControl(null, [Validators.required, this.birthDateValidator]),
    birthPlace: new FormControl('', Validators.required),
    citizenship: new FormControl('Filipino', Validators.required),
    
    // Address
    address: new FormControl('', Validators.required),
    province: new FormControl('', Validators.required),
    
    // Student Info
    studentId: new FormControl('', [Validators.required, this.studentIdValidator]),
    schoolName: new FormControl('', Validators.required),
    
    // LTO Info
    restrictionCode: new FormControl('', Validators.required),
    bloodType: new FormControl('', Validators.required),
    
    // TIN (Optional)
    tinNumber: new FormControl('', [this.tinValidator]),
    
    // Medical Info
    medicalClinic: new FormControl('', Validators.required),
    medicalCertDate: new FormControl(null, [Validators.required, this.medicalDateValidator]),
    
    // Emergency Contact
    emergencyName: new FormControl('', Validators.required),
    emergencyContact: new FormControl('', [Validators.required, this.mobileValidator]),
    emergencyRelation: new FormControl('', Validators.required),
    
    // Payment
    paymentMethod: new FormControl('', Validators.required),
    orNumber: new FormControl('', Validators.required),
    
    // Terms
    agreeTerms: new FormControl(false, Validators.requiredTrue)
  });

  constructor() {
    this.formdata.get('password')?.valueChanges.subscribe(value => {
      this.checkPasswordStrength(value);
    });
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-theme', this.isDarkMode);
  }

  onClickSubmit(data: any) {
    this.submitted = true;
    
    if (this.formdata.valid) {
      this.fullName = data.fullName;
      this.email = data.email;
      this.password = data.password;
      this.gender = data.gender;
      this.birthDate = data.birthDate;
      this.birthPlace = data.birthPlace;
      this.citizenship = data.citizenship;
      this.address = `${data.address}, ${data.province}`;
      this.studentId = data.studentId;
      this.schoolName = data.schoolName;
      this.restrictionCode = data.restrictionCode;
      this.bloodType = data.bloodType;
      this.tinNumber = data.tinNumber;
      this.medicalClinic = data.medicalClinic;
      this.medicalCertDate = data.medicalCertDate;
      this.emergencyName = data.emergencyName;
      this.emergencyContact = data.emergencyContact;
      this.emergencyRelation = data.emergencyRelation;
      this.paymentMethod = data.paymentMethod;
      this.orNumber = data.orNumber;
      this.agreeTerms = data.agreeTerms;
      this.referenceNumber = this.generateReferenceNumber();

      console.log('Student Permit Application:', this.formdata.value);
    } else {
      Object.keys(this.formdata.controls).forEach(key => {
        this.formdata.get(key)?.markAsTouched();
      });
    }
  }

  resetForm() {
    this.formdata.reset({
      fullName: '',
      email: '',
      password: '',
      gender: '',
      birthDate: null,
      birthPlace: '',
      citizenship: 'Filipino',
      address: '',
      province: '',
      studentId: '',
      schoolName: '',
      restrictionCode: '',
      bloodType: '',
      tinNumber: '',
      medicalClinic: '',
      medicalCertDate: null,
      emergencyName: '',
      emergencyContact: '',
      emergencyRelation: '',
      paymentMethod: '',
      orNumber: '',
      agreeTerms: false
    });
    this.submitted = false;
    this.passwordStrength = 0;
    this.passwordFeedback = '';
    this.referenceNumber = '';
  }
}