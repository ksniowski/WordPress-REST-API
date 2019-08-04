import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsListComponent } from './comments-list.component';
import { CommentModule } from '../comment/comment.module';

@NgModule({
    declarations: [CommentsListComponent],
    exports: [CommentsListComponent],
    imports: [CommentModule, CommonModule],
})
export class CommentsListModule {}