import { Component, OnInit } from '@angular/core';
import { FitnessDirectoryService } from '../../../services/fitness-directory.service'
import { FitnessDirectoryEnum } from '../../../../shared/enum/fitnessDirectoryEnums'
import { ActiveRoleEnum } from 'src/app/shared/enum/profile.enum';
import { IFitPro } from 'src/app/shared/interfaces/fit-pro.interface';
import { LandingPageService } from 'src/app/components/services/landing-page.service';
import { MyProfile } from 'src/app/shared/interfaces/profile.interface';
import { ProfileService } from 'src/app/services/profile.service';
import { IFitnessDirFilter } from 'src/app/shared/interfaces/landing-page.interface';

@Component({
  selector: 'app-fitness-center',
  templateUrl: './fitness-center.component.html',
  styleUrls: ['./fitness-center.component.scss']
})
export class FitnessCenterComponent implements OnInit {
  fitnessCenterList: MyProfile[] = [];
  showContent: boolean = false;


  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    let data = {} as IFitnessDirFilter;
    data.role = 'center';
    this.profileService.filterFitnessDir(data).subscribe((response: IFitPro) => {
      this.fitnessCenterList = response.users;
      this.showContent = true;
    })
  }
}
