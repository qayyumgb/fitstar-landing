import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFitnessComponent } from './top-fitness.component';

describe('TopFitnessComponent', () => {
  let component: TopFitnessComponent;
  let fixture: ComponentFixture<TopFitnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopFitnessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopFitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
