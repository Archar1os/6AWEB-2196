import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { TruncatePipe } from './truncatepipe';
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
 })
export class ApiService {
  private postsSubject = new BehaviorSubject<Post[]>([]);
  posts$ = this.postsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadPosts();
  }

  private loadPosts() {
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(shareReplay(1))
      .subscribe({
        next: posts => this.postsSubject.next(posts),
        error: err => {
          console.error('Error fetching posts', err);
          this.postsSubject.next([]);
        }
      });
  }
}
