import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../services/app.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})

export class PostComponent implements OnInit {
  @Input() post: Post;

  ngOnInit() {}
}