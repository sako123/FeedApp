import { CommentModule } from './../comment/comment.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class FeedModule {
  id: number;
  name: string = '';
  text: string = '';
  likes: number = 0;
  timestamp: number;
  commentCount: number = 0;
  comments: CommentModule[] = [];
 }
