import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../api-service';
import { ApiService } from '../api-service';
import { TruncatePipe } from '../truncatepipe';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [CommonModule, TruncatePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  posts$: Observable<Post[]>;
  constructor(private apiService: ApiService) {
    // Take only the latest 5 posts
    this.posts$ = this.apiService.posts$.pipe(
      map(posts => posts.slice(0, 5))
    );
  }
}
