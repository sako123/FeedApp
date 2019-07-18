import { CommentService } from './../../services/comment.service';
import { CommentModule } from './../../module/comment/comment.module';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  @Input() listComments: CommentModule[];
  @Input() feedId: Number;
  @Output() refreshCommentEvent: EventEmitter<boolean> = new EventEmitter();
  // addCommentActive: Boolean = false;
  newComment: CommentModule = new CommentModule();
  constructor(private commentService: CommentService) {}

  ngOnInit() {}

  activeNew() {
    this.newComment = new CommentModule();
   // this.addCommentActive = !this.addCommentActive;
  }

  loadComments() {
    console.log('refresh list of comments');
    this.refreshCommentEvent.emit(true);
  }

  addNewComment(data: CommentModule) {
    // tslint:disable-next-line:no-shadowed-variable
    this.commentService
      .addComment(this.feedId, this.newComment)
      .subscribe((data: CommentModule) => {
        this.activeNew();
        console.log(data);
        // this.addCommentActive = false;
        this.refreshCommentEvent.emit(true);
      });
  }
}
