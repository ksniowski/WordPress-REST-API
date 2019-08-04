import { NgModule } from '@angular/core';
import { PostComponent } from './post.component';
import { CommonModule } from '@angular/common';
import { CommentsListModule } from '../comments-list/comments-list.module';

@NgModule({
    declarations: [PostComponent],
    exports: [PostComponent],
    imports: [CommentsListModule, CommonModule],
})
export class PostModule {}