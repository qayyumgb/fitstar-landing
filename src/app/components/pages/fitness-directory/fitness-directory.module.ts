import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FitnessDirectoryRoutingModule } from './fitness-directory-routing.module';
import { FitnessCenterComponent } from './fitness-center/fitness-center.component';
import { FitnessModalComponent } from './fitness-modal/fitness-modal.component';
import { FitnessProsComponent } from './fitness-pros/fitness-pros.component';
import { TabsComponent } from './tabs/tabs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FitnessDirectoryContentComponent } from './fitness-directory-content/fitness-directory-content.component';
import {DropdownModule} from 'primeng/dropdown';
import { TopFitnessProComponent } from './top-fitness-pro/top-fitness-pro.component';
import { TopFitnessCenterComponent } from './top-fitness-center/top-fitness-center.component';
import { TopFitnessModelComponent } from './top-fitness-model/top-fitness-model.component';


@NgModule({
  declarations: [FitnessCenterComponent, FitnessModalComponent, FitnessProsComponent, TabsComponent, FitnessDirectoryContentComponent, TopFitnessProComponent, TopFitnessCenterComponent, TopFitnessModelComponent],
  imports: [
    CommonModule,
    FitnessDirectoryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule
  ],
  exports: [
    FitnessCenterComponent, FitnessModalComponent, FitnessProsComponent, TabsComponent, FitnessDirectoryContentComponent
  ]
})
export class FitnessDirectoryModule { }
