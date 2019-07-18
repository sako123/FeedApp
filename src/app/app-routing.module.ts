import { CommentListComponent } from './components/comment-list/comment-list.component';
import { FeedListComponent } from './components/feed-list/feed-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedEditItemComponent } from './components/feed-edit-item/feed-edit-item.component';

const routes: Routes = [
  { path: 'feeds',
    component: FeedListComponent
  },
  {
    path: 'feeds/:id',
    component: FeedEditItemComponent,
    children: []
  },
  { path: '', redirectTo: '/feeds', pathMatch: 'full' }
//   { path: '**', component: ErrorsComponent, data: { error: 404 } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
