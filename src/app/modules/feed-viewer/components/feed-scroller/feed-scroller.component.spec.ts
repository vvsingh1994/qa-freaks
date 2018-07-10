import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedScrollerComponent } from './feed-scroller.component';

describe('FeedScrollerComponent', () => {
  let component: FeedScrollerComponent;
  let fixture: ComponentFixture<FeedScrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedScrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
