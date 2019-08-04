import { NgModule } from '@angular/core';
import { PostsListComponent } from './posts-list.component';
import { PostModule } from '../post/post.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [PostsListComponent],
    exports: [PostsListComponent],
    imports: [PostModule, CommonModule],
})
export class PostsListModule {}