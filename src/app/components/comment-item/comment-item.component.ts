import { CommentService } from './../../services/comment.service';
import { FeedModel } from './../../models/feed/feed.module';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommentModel } from './../../models/comment/comment.module';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: "app-comment-item",
  templateUrl: "./comment-item.component.html",
  styleUrls: ["./comment-item.component.css"]
})
export class CommentItemComponent implements OnInit {
  @Input() currentComment: CommentModel;
  @Output() delCommentEvent: EventEmitter<boolean> = new EventEmitter();
  constructor(
    private commentService: CommentService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  deleteComment() {
    // mazanie aktualneho komentara
    if (confirm('Naozaj chces zmazat komentár ?')) {
      console.log('Mazanie comment s id:' + this.currentComment.id);
      this.commentService
        .deleteComment(this.currentComment.id)
        .subscribe(() => {
          this.snackBar.open('Komentár je zmazany', 'Mazanie', {
            duration: 2000
          });
          this.delCommentEvent.emit(true);
        });
    }
  }
}
