import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsBlogComponent } from './reviews-blog.component';

describe('ReviewsBlogComponent', () => {
  let component: ReviewsBlogComponent;
  let fixture: ComponentFixture<ReviewsBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewsBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
