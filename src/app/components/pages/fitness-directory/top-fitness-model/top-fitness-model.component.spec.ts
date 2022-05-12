import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFitnessModelComponent } from './top-fitness-model.component';

describe('TopFitnessModelComponent', () => {
  let component: TopFitnessModelComponent;
  let fixture: ComponentFixture<TopFitnessModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopFitnessModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopFitnessModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
