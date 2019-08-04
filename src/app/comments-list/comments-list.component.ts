import { Component, OnInit, Input } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AppService, Comment } from '../services/app.service';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.less']
})
export class CommentsListComponent implements OnInit {
  @Input() postId: number;

  comments$: Observable<Comment[]>;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.loadCommentsEvent
      .subscribe((payload: any) => {
        if (this.postId === payload.id) {
          this.comments$ = of(payload.comments);
        }
      });
  }
}