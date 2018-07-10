import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedScrollerComponent } from './components/feed-scroller/feed-scroller.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BrowserModule } from '../../../../node_modules/@angular/platform-browser';
@NgModule({
  imports: [
    CommonModule,
    InfiniteScrollModule,
    BrowserModule
  ],
  declarations: [FeedScrollerComponent],
  exports: [FeedScrollerComponent]
})
export class FeedViewerModule { }
