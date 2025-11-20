import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Required for ngModel
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-binding-demo',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Add FormsModule here
  templateUrl: './data-binding-demo.html',
  styleUrls: ['./data-binding-demo.css']
})
export class DataBindingDemo {
  title = 'My Angular Application';
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  textColor = 'blue';
  isHighlighted = true;
  userInput = '';

  showAlert() {
    alert(`You typed: ${this.userInput}`);
  }
}