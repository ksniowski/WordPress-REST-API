import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService, Post } from '../services/app.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.less']
})
export class PostsListComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(private appService: AppService) {}

  ngOnInit() {
    const postsCount = 5;
    this.posts$ = this.appService.getPosts(postsCount);
  }
}