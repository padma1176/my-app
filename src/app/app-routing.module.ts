import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoFeedComponent } from './video-feed/video-feed.component';

const routes: Routes = [{path:'video-feed', component: VideoFeedComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
