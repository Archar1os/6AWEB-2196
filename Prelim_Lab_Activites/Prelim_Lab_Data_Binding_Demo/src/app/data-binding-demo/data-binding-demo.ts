import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-binding-demo',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './data-binding-demo.html',
  styleUrls: ['./data-binding-demo.css']
})
export class DataBindingDemo {
  title = 'My Angular Application';
  description = 'This is my new Angular Application';
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  w = 50;
  h = 50;
  altText = 'Angular Logo';
  textColor = 'blue';
  isHighlighted = true;
  yourName = '';

  count = 0;
  increment(){
    this.count++;
  }
  decrement(){
    this.count--;
  }
}