import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FitnessDirectoryRoutingModule } from './fitness-directory-routing.module';
import { FitnessCenterComponent } from './fitness-center/fitness-center.component';
import { FitnessModalComponent } from './fitness-modal/fitness-modal.component';
import { FitnessProsComponent } from './fitness-pros/fitness-pros.component';
import { TabsComponent } from './tabs/tabs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FitnessDirectoryContentComponent } from './fitness-directory-content/fitness-directory-content.component';



@NgModule({
  declarations: [FitnessCenterComponent, FitnessModalComponent, FitnessProsComponent, TabsComponent, FitnessDirectoryContentComponent],
  imports: [
    CommonModule,
    FitnessDirectoryRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FitnessCenterComponent, FitnessModalComponent, FitnessProsComponent, TabsComponent, FitnessDirectoryContentComponent
  ]
})
export class FitnessDirectoryModule { }
