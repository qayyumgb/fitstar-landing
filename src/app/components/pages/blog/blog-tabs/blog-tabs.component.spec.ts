import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTabsComponent } from './blog-tabs.component';

describe('BlogTabsComponent', () => {
  let component: BlogTabsComponent;
  let fixture: ComponentFixture<BlogTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
