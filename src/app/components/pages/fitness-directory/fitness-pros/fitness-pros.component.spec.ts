import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessProsComponent } from './fitness-pros.component';

describe('FitnessProsComponent', () => {
  let component: FitnessProsComponent;
  let fixture: ComponentFixture<FitnessProsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitnessProsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessProsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
