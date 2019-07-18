import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CommentModule } from '../module/comment/comment.module';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  url = environment.baseServerApiUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  /*getComments(feedId: Number): Observable<CommentModule[]> {
    return this
      .http
      .get<CommentModule[]>(`${this.url}/feed/${feedId}/comments`);
  }*/

  addComment(feedId: Number, data: CommentModule) {
    data.timestamp = new Date().getTime();
    return this
      .http
      .put(`${this.url}/feed/${feedId}/comment`, data, this.httpOptions);
  }

  deleteComment(commentId: Number) {
    return this
      .http
      .delete(`${this.url}/comment/${commentId}`);
  }

}
