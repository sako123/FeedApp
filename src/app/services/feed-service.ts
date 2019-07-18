import { FeedModule } from '../module/feed/feed.module';
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, filter, switchMap, switchMapTo, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FeedService {

  url = environment.baseServerApiUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient
    ) { }

  getFeeds(): Observable<FeedModule[]> {
    return this
      .http
      .get<FeedModule[]>(`${this.url}/feeds`).pipe(catchError(err => this.handleError(err)));
  }

  getFeedinfo(FeedId: number): Observable<FeedModule>  {
    return this
      .http
      .get<FeedModule>(`${this.url}/feed/${FeedId}`).pipe(catchError(err => this.handleError(err)));
    }

  getLikeCount(FeedId: any): Observable<number> {
    return this
      .http
      .get<number>(`${this.url}/feed/${FeedId}/like/count`).pipe(catchError(err => this.handleError(err)));
  }
  getCommentCount(FeedId: any): Observable<number> {
    return this
      .http
      .get<number>(`${this.url}/feed/${FeedId}/comment/count`).pipe(catchError(err => this.handleError(err)));
  }

  deleteFeedinfo(FeedId: number) {
    return this
      .http
      .delete(`${this.url}/feed/${FeedId}`).pipe(catchError(err => this.handleError(err)));
  }

  updateFeed(FeedId: number, data: FeedModule) {
    return this
      .http
      .put(`${this.url}/feed/${FeedId}`, data, this.httpOptions).pipe(catchError(err => this.handleError(err)));
  }

  addFeed(data: FeedModule) {
    data.timestamp = new Date().getTime();
    return this
      .http
      .put<FeedModule>(`${this.url}/feed`, data, this.httpOptions);
  }

  handleError(err: any) {
    console.log(err); return throwError(err);
  }

}
