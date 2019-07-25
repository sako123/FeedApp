import { Observable } from 'rxjs';
import { FeedModel } from './../../models/feed/feed.module';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeedService} from './../../services/feed-service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.css'],
  providers: []
})
export class FeedListComponent implements OnInit {
  listFeeds: FeedModel[];
  newFeed: FeedModel = new FeedModel();

  constructor(
    private route: ActivatedRoute,
    private feedService: FeedService,
    private snackBar: MatSnackBar
  ) {
    this.route.params.subscribe(() => {
      this.loadFeeds();
    });
  }

  ngOnInit() {}

  // Nacita vsetky feedy
  loadFeeds() {
    console.log('refresh list of feeds');
    this.feedService.getFeeds().subscribe(data => (this.listFeeds = data));
  }
  activeNew() {
    this.newFeed = new FeedModel();
  }
  addNewFeed(newFeed: FeedModel) {
    this.feedService.addFeed(this.newFeed).subscribe((data: FeedModel) => {
      this.activeNew();
      console.log(data);
      this.snackBar.open('Feed bol vytvorený', 'Pridaný', {
        duration: 2000
      });
      this.loadFeeds();
    });
  }
}
