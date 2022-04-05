import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicBlogComponent } from './music-blog.component';

describe('MusicBlogComponent', () => {
  let component: MusicBlogComponent;
  let fixture: ComponentFixture<MusicBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
