import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api-service';
import { Observable, combineLatest, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../api-service';
import { FormsModule } from '@angular/forms';
import { TruncatePipe } from '../truncatepipe';

@Component({
  selector: 'app-services',
  imports: [CommonModule, FormsModule, TruncatePipe],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  searchTerm: string = '';
  private searchTerm$ = new BehaviorSubject<string>('');
  services!: Observable<Post[]>;
  loading = true;
  error = false;

  constructor(private apiService: ApiService) {
    this.services = combineLatest([ this.apiService.posts$, this.searchTerm$ ]).pipe(
      map(([posts, term]) => {
        this.loading = false;
        if (!posts) {
          this.error = true;
          return [];
        }
        return posts.filter(post => post.title.toLowerCase().includes(term.toLowerCase()) || post.body.toLowerCase().includes(term.toLowerCase()));
      })
    );
  }

  setSearchTerm(term: string) {
    this.searchTerm$.next(term);
  }
}
