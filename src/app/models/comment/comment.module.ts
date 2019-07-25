import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class CommentModel {
  id: number;
  name: string;
  text: string;
  timestamp: number;
 }
