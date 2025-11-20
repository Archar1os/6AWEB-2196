import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataBindingDemo } from './data-binding-demo/data-binding-demo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, DataBindingDemo],
  templateUrl: 'app.html',
  styleUrls: ['app.css']
})
export class App {

}