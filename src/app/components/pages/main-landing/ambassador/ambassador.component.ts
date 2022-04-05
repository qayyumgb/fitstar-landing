import { Component, OnInit, TemplateRef } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AmbassadorService } from 'src/app/services/abbassador.service';
import { IAmbassador, IAmbassadors } from 'src/app/shared/interfaces/ambassador.interface';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-ambassador',
  templateUrl: './ambassador.component.html',
  styleUrls: ['./ambassador.component.scss']
})
export class AmbassadorComponent implements OnInit {

  ambassadorOptions: OwlOptions = {
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

  ambassadorList: IAmbassador[] = []
  constructor(private ambassadorService: AmbassadorService, private modalService: BsModalService) { }
  modalRef?: BsModalRef;
  userDescription = ""
  openModal(template: TemplateRef<any>, getDescs: any) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    this.userDescription = getDescs
  }
  ngOnInit(): void {
    this.ambassadorService.getAllAmbassador(10, 0 + 1).subscribe(
      (data: IAmbassadors) => {
        this.ambassadorList = data.ambassador
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
