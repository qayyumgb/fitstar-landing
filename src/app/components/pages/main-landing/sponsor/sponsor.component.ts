import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SponsorService } from 'src/app/services/sponser.service';
import { ISponsorEntity, ISponsors } from 'src/app/shared/interfaces/sponser.interface';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.scss']
})
export class SponsorComponent implements OnInit {
  sponsorList: ISponsors[] = [];


  sponsorSlider: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    responsive: {
      525: {
        items: 2
      },
      767: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: true

  }

  constructor(private sponsorService: SponsorService,) { }

  ngOnInit(): void {
    this.sponsorService.getAllSponsor(10, 0 + 1).subscribe(
      (data: ISponsorEntity) => {
        this.sponsorList = data.sponsors;

      },
      (error) => {
        console.log(error);
      }
    );
  }

}
