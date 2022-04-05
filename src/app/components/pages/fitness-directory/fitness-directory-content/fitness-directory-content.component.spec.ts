import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessDirectoryContentComponent } from './fitness-directory-content.component';

describe('FitnessDirectoryContentComponent', () => {
  let component: FitnessDirectoryContentComponent;
  let fixture: ComponentFixture<FitnessDirectoryContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitnessDirectoryContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessDirectoryContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
