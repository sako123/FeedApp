import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedEditItemComponent } from './feed-edit-item.component';

describe('FeedEditItemComponent', () => {
  let component: FeedEditItemComponent;
  let fixture: ComponentFixture<FeedEditItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedEditItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedEditItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
