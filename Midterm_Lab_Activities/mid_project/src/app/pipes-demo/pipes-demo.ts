import { Component } from '@angular/core';
import { CommonModule, PercentPipe } from '@angular/common';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pipes-demo',
  imports: [CommonModule],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo{
  presentDate : Date = new Date();
  time$ = interval(1000).pipe(map(() => new Date()));
  price : number = 20000;
  Fruits = ['Apple', 'Orange', 'Grapes', 'Mango', 'Kiwi', 'Pomegranate'];
  decimalNum1 : number = 8.7589623;
  decimalNum2 : number = 5.43;
  percentage : number = 0.256;
  message: string = 'Hello Angular Pipes';
  student = { name: 'Maria', age: 21, course: 'Web Development' };
  ngOnInit() {
  }
}
