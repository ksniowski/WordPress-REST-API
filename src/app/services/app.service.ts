import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { StorageService } from './storage.service';

export interface Post {
  id: number;
  thumbnail: string;
  date: string;
  title: string;
  URL: string;
  author: string;
  avatar: string;
  excerpt: string;
}

export interface PostsResponse {
  posts: any;
}

export interface Comment {
  author: string;
  avatar: string;
  date: string;
  content: string;
}

export interface CommentsResponse {
  comments: any;
}

const POSTS_IDS_SESSION_KEY = 'postsIds';

@Injectable({ providedIn: 'root' })
export class AppService {
  loadCommentsEvent = new EventEmitter();

  constructor(private http: HttpClient, private storageService: StorageService) {}

  async emitLoadComments() {
    const commentsCount = 3;
    const postsIds = JSON.parse(this.storageService.getFromSession(POSTS_IDS_SESSION_KEY));
    postsIds.forEach(async (element: any) => {
      const comments = await this.getComments(element, commentsCount).toPromise();
      this.loadCommentsEvent.emit({id: element, comments});
    });
  }

  getPosts(count: number): Observable<Post[]> {
    const endpoint = `https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com/posts/?number=${count}`;
    const postsIds = [];
    const posts = this.http.get<PostsResponse>(endpoint).pipe(
      map(res => res.posts.map((item: any) => {
        postsIds.push(item.ID);
        return {
          id: item.ID,
          thumbnail: item.post_thumbnail.URL,
          date: item.date,
          title: item.title,
          url: item.URL,
          author: item.author.name,
          avatar: item.author.avatar_URL,
          excerpt: item.excerpt,
        };
      })),
      tap(() => this.storageService.saveInSession(POSTS_IDS_SESSION_KEY, JSON.stringify(postsIds)))
    );
    return posts;
  }

  getComments(postId: number, count: number): Observable<Comment[]> {
      const endpoint = `https://public-api.wordpress.com/rest/v1/sites/en.blog.wordpress.com/posts/${postId}/replies/?number=${count}`;
      return this.http.get<CommentsResponse>(endpoint).pipe(
          map(res => res.comments.map((item: any) => ({
            author: item.author.name,
            avatar: item.author.avatar_URL,
            date: item.date,
            content: item.raw_content,
          })))
      );
  }
}
