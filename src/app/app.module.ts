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
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTooltipModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    FeedListComponent,
    FeedItemComponent,
    CommentListComponent,
    CommentItemComponent,
    FeedEditItemComponent,
    InfoDialogComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    SharedMaterialModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
