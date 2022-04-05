
import { Component, OnInit } from '@angular/core';
import { FitnessDirectoryService } from '../../../services/fitness-directory.service'
import { FitnessDirectoryEnum } from '../../../../shared/enum/fitnessDirectoryEnums'
import { IFitPro, } from 'src/app/shared/interfaces/fit-pro.interface';
import { LandingPageService } from 'src/app/components/services/landing-page.service';
import { ActiveRoleEnum } from 'src/app/shared/enum/profile.enum';
import { MyProfile } from 'src/app/shared/interfaces/profile.interface';
import { ProfileService } from 'src/app/services/profile.service';
import { IFitnessDirFilter } from 'src/app/shared/interfaces/landing-page.interface';


@Component({
  selector: 'app-fitness-modal',
  templateUrl: './fitness-modal.component.html',
  styleUrls: ['./fitness-modal.component.scss']
})
export class FitnessModalComponent implements OnInit {

  fitnessModalList: MyProfile[] = [];
  showContent: boolean = false;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    let data = {} as IFitnessDirFilter;
    data.role = 'modal'
    this.profileService.filterFitnessDir(data).subscribe((response: IFitPro) => {
      this.fitnessModalList = response.users;
      this.showContent = true;
    })
  }

}
