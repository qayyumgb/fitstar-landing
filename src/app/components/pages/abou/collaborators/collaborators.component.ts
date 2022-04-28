import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {CollabortorsService} from '../../../services/collabortors.service'

@Component({
  selector: 'app-collaborators',
  templateUrl: './collaborators.component.html',
  styleUrls: ['./collaborators.component.scss']
})
export class CollaboratorsComponent implements OnInit {

  constructor(private _collaboratorService:CollabortorsService) { }
  collaboratorSlider: OwlOptions = {
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

  collaboratorList:any=[];

  ngOnInit(): void {
    this._collaboratorService.getAllCollaborators(10, 0 + 1).subscribe(
      (data: any) => {
        this.collaboratorList = data.collaborators;
        console.log(this.collaboratorList)
      },
      (error) => {
        console.log(error);
      }
    );
  }



}
