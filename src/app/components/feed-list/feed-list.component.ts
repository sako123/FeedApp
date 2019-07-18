import { Observable } from 'rxjs';
import { FeedModule } from './../../module/feed/feed.module';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeedService} from './../../services/feed-service';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.css'],
  providers: [FeedService]
})
export class FeedListComponent implements OnInit {

  listFeeds: FeedModule[];
  newFeed: FeedModule = new FeedModule();

  constructor(private route: ActivatedRoute,
    private feedService: FeedService) {
      this.route.params.subscribe(() => {
        this.loadFeeds();
      });
     }

  ngOnInit() {

  }

  // Nacita vsetky feedy
  loadFeeds() {
    console.log('refresh list of feeds');
    this.feedService.getFeeds()
      .subscribe(data => this.listFeeds = data);
  }
  activeNew() {
    this.newFeed = new FeedModule();
  }
  addNewFeed(newFeed: FeedModule) {
    this.feedService.addFeed(this.newFeed).subscribe((data: FeedModule) => {
      this.activeNew();
      console.log(data);
      this.loadFeeds();
    });
  }
}
