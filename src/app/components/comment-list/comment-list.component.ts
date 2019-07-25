import { CommentService } from './../../services/comment.service';
import { CommentModel } from './../../models/comment/comment.module';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: "app-comment-list",
  templateUrl: "./comment-list.component.html",
  styleUrls: ["./comment-list.component.css"]
})
export class CommentListComponent implements OnInit {
  @Input() listComments: CommentModel[];
  @Input() feedId: Number;
  @Output() refreshCommentEvent: EventEmitter<boolean> = new EventEmitter();

  newComment: CommentModel = new CommentModel();
  constructor(private commentService: CommentService) {}

  ngOnInit() {}

  activeNew() {
    this.newComment = new CommentModel();
  }

  loadComments() {
    console.log("refresh list of comments");
    this.refreshCommentEvent.emit(true);
  }

  addNewComment(data: CommentModel) {
    this.commentService
      .addComment(this.feedId, this.newComment)
      .subscribe((data: CommentModel) => {
        this.activeNew();
        console.log(data);
        // refresh event pre parent (FeedEditItemComponent)
        this.refreshCommentEvent.emit(true);
      });
  }
}
