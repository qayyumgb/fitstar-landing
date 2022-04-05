import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionBlogComponent } from './nutrition-blog.component';

describe('NutritionBlogComponent', () => {
  let component: NutritionBlogComponent;
  let fixture: ComponentFixture<NutritionBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutritionBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
