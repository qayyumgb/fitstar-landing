import { Component, OnInit } from '@angular/core';
import { FitnessDirectoryService } from '../../../services/fitness-directory.service';
import { FitnessDirectoryEnum } from '../../../../shared/enum/fitnessDirectoryEnums'
import { LandingPageService } from 'src/app/components/services/landing-page.service';
import { IFitPro, } from 'src/app/shared/interfaces/fit-pro.interface';
import { MyProfile } from 'src/app/shared/interfaces/profile.interface';
import { ProfileService } from 'src/app/services/profile.service';
import { IFitnessDirFilter } from 'src/app/shared/interfaces/landing-page.interface';

@Component({
  selector: 'app-fitness-pros',
  templateUrl: './fitness-pros.component.html',
  styleUrls: ['./fitness-pros.component.scss']
})
export class FitnessProsComponent implements OnInit {
  fitnessProList: MyProfile[] = [];
  showContent: boolean = false;

  fitnessProfssionList: any[] = [];

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    let data = {} as IFitnessDirFilter;
    data.role = 'pro'
    this.profileService.filterFitnessDir(data).subscribe((response: IFitPro) => {
      this.fitnessProList = response.users;
      console.log(`list pro are :${this.fitnessProList}`)
      this.showContent = true;
    })
  }
}
