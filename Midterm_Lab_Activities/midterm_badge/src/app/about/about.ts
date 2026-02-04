import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api-service';
import { TruncatePipe } from '../truncatepipe';
@Component({
  selector: 'app-about',
  imports: [CommonModule, TruncatePipe],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  today: Date = new Date();
}
