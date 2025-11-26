import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrls: ['./data-binding.css']
})
export class DataBinding {
  // Interpolation
  studentName = "Smith Dainielle L. Romero";
  score = 95;

  // Property binding
  imageUrl: string = 'https://picsum.photos/200';
  isDisabled = true;

  // Two-way binding
  username: string = '';
  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }

  onActionClick() {
    alert('Button clicked!');
  }
}
