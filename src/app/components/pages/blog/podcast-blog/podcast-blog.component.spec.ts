import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastBlogComponent } from './podcast-blog.component';

describe('PodcastBlogComponent', () => {
  let component: PodcastBlogComponent;
  let fixture: ComponentFixture<PodcastBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodcastBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
