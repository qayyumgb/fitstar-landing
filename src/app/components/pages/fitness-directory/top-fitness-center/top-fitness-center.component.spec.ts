import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFitnessCenterComponent } from './top-fitness-center.component';

describe('TopFitnessCenterComponent', () => {
  let component: TopFitnessCenterComponent;
  let fixture: ComponentFixture<TopFitnessCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopFitnessCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopFitnessCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
