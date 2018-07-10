import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'qa-feed-scroller',
  templateUrl: './feed-scroller.component.html',
  styleUrls: ['./feed-scroller.component.scss']
})
export class FeedScrollerComponent implements OnInit {

  @Output() scrolledUp: EventEmitter<any> = new EventEmitter();
  @Output() scrolledDown: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onScrollDown() {
    console.log('scrolled Down!!');
    this.scrolledDown.emit();
  }

  onScrollUp() {
    console.log('scrolled Up!!');
    this.scrolledUp.emit();
  }
}
