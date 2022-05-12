import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFitnessProComponent } from './top-fitness-pro.component';

describe('TopFitnessProComponent', () => {
  let component: TopFitnessProComponent;
  let fixture: ComponentFixture<TopFitnessProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopFitnessProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopFitnessProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
