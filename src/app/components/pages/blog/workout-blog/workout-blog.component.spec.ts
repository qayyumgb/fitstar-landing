import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutBlogComponent } from './workout-blog.component';

describe('WorkoutBlogComponent', () => {
  let component: WorkoutBlogComponent;
  let fixture: ComponentFixture<WorkoutBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
