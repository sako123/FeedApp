import { FeedService } from './../../services/feed-service';
import { FeedModel } from './../../models/feed/feed.module';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location} from '@angular/common';
import { Observable, BehaviorSubject, throwError, of } from 'rxjs';
import { map, filter, switchMap, switchMapTo, mergeMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-feed-edit-item',
  templateUrl: './feed-edit-item.component.html',
  styleUrls: ['./feed-edit-item.component.css'],
  providers: [FeedService]
})
export class FeedEditItemComponent implements OnInit {
  feedId: number;
  currentFeed: FeedModel;

  constructor(
    private activeRoute: ActivatedRoute,
    private feedService: FeedService,
    private location: Location
  ) {}

  ngOnInit() {
    console.log('ngOnInit');
    this.activeRoute.params.subscribe((params: Params) => {
      console.log(params);
      if (params) {
        this.feedId = params['id'];
        this.loadData(this.feedId);
      }
    });
  }

  loadData(feedId: number) {
    console.log('start loadData id: ' + feedId);
    this.feedService
      .getFeedinfo(feedId)
      .pipe(
        mergeMap(feed =>
          this.feedService.getCommentCount(feedId).pipe(
            tap(count => {
              feed.commentCount = count;
              this.currentFeed = feed;
              console.log('current feed ' + feed);
            })
          )
        )
      )
      .subscribe();
  }

  goBack() {
    this.location.back();
  }

  incLike() {
    // prida like
    this.currentFeed.likes += 1;
    this.feedService.updateFeed(this.feedId, this.currentFeed).subscribe(() => {
      this.loadData(this.feedId);
    });
  }

  decLike() {
    // odobere like
    this.currentFeed.likes -= 1;
    this.feedService.updateFeed(this.feedId, this.currentFeed).subscribe(() => {
      this.loadData(this.feedId);
    });
  }
}
