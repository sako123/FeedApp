import { SharedMaterialModule } from './../../Shared-Material/shared-material.module';
import { FeedService } from './../../services/feed-service';
import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FeedModel } from './../../models/feed/feed.module';
import { MatSnackBar } from '@angular/material';



@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.css'],
  providers: [],
})
export class FeedItemComponent implements OnInit, OnDestroy {

  @Input() currentFeed: FeedModel;
  @Output() delFeedEvent: EventEmitter<boolean> = new EventEmitter();
  countCommponents: Number;

  constructor(private feedService: FeedService,
              private snackBar: MatSnackBar
              ) { }

  ngOnInit() {
  }

  deleteFeed(feedId: number) {
    // mazanie aktualneho feedu aj s komentarmi
    if (confirm('Naozaj chces zmazat feed ?')) {
      console.log('Mazanie feedu s id:' + this.currentFeed.id);
      this.feedService.deleteFeedinfo(feedId).subscribe(() => {
          this.snackBar.open('Feed je zmazany', 'Mazanie', {
          duration: 2000,
        });
        // event preposiela stav do FeedListComponent
        this.delFeedEvent.emit(true);
      });
    }
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy Zmazane');
  }



}

