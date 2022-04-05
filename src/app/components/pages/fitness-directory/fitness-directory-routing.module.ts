import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FitnessCenterComponent } from './fitness-center/fitness-center.component';
import { FitnessModalComponent } from './fitness-modal/fitness-modal.component';
import { FitnessProsComponent } from './fitness-pros/fitness-pros.component';

const routes: Routes = [
  {
    path: 'fitness-pros',
    component: FitnessProsComponent
  },
  {
    path: 'fitness-center',
    component: FitnessCenterComponent
  },
  {
    path: 'fitness-models',
    component: FitnessModalComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FitnessDirectoryRoutingModule { }
