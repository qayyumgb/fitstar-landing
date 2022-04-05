import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { IFitnessDirFilter, ITopFitnessPro } from 'src/app/shared/interfaces/landing-page.interface';
import { User } from 'src/app/shared/interfaces/login.interface';
import { LandingPageService } from '../../../services/landing-page.service';
import { IProfileInfo, MyProfile } from 'src/app/shared/interfaces/profile.interface';
import { IFitPro } from 'src/app/shared/interfaces/fit-pro.interface';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-top-fitness',
  templateUrl: './top-fitness.component.html',
  styleUrls: ['./top-fitness.component.scss']
})
export class TopFitnessComponent implements OnInit {
  fitnessProList: MyProfile[] = [];
  ambasadorSlider: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 1000,
    autoplay: false,
    margin: 10,
    autoplayHoverPause: false,
    items: 3,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      525: {
        items: 2
      },
      767: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }


  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    let data = {} as IFitnessDirFilter;
    data.role = 'pro'
    this.profileService.filterFitnessDir(data).subscribe((response: IFitPro) => {
      this.fitnessProList = response.users;

    })
  }
}


