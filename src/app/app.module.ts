import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedListComponent } from './components/feed-list/feed-list.component';
import { FeedItemComponent } from './components/feed-item/feed-item.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommentItemComponent } from './components/comment-item/comment-item.component';
import { FeedEditItemComponent } from './components/feed-edit-item/feed-edit-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedMaterialModule } from './Shared-Material/shared-material.module';
import { InfoDialogComponent } from './Utils/info-dialog/info-dialog.component';
import bootstrap from 'bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FeedListComponent,
    FeedItemComponent,
    CommentListComponent,
    CommentItemComponent,
    FeedEditItemComponent,
    InfoDialogComponent
  ],
  imports: [
    BrowserModule,
    SharedMaterialModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
