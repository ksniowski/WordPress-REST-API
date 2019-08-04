import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentComponent } from './comment.component';

@NgModule({
    declarations: [CommentComponent],
    exports: [CommentComponent],
    imports: [CommonModule],
})
export class CommentModule {}