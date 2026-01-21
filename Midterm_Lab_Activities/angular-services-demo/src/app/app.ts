import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Myservice } from './myservice';
import { NewCmp } from './new-cmp/new-cmp';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewCmp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-services-demo');
  todayDate;
  componentproperty = 'App Component';
  constructor(private myservice: Myservice){
    this.todayDate = this.myservice.showTodayDate();
    this.componentproperty = this.myservice.serviceproperty;
  }
}
