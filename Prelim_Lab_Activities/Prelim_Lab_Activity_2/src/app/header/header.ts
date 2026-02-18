import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  name: string = 'Smith Dainielle L. Romero';
  location: string = 'Mabalacat City, Pampanga';
  mobile: string = '+63 960 562 0450';
  email: string = 'smithd0inelle@gmail.com';
}
