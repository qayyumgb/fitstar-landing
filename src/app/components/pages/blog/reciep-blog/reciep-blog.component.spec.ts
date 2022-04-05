import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciepBlogComponent } from './reciep-blog.component';

describe('ReciepBlogComponent', () => {
  let component: ReciepBlogComponent;
  let fixture: ComponentFixture<ReciepBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReciepBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciepBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
