import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { SelectItem, PrimeNGConfig } from 'primeng/api';
import { PortFolioUploadEnumTypeEnum } from 'src/app/shared/enum/profile.enum';
import { ProfileService } from 'src/app/services/profile.service';
import { IProfileInfo, IProfileInfoResponse, MyProfile } from 'src/app/shared/interfaces/profile.interface';

@Component({
  selector: 'app-portfilo',
  templateUrl: './portfilo.component.html',
  styleUrls: ['./portfilo.component.scss']
})
export class PortfiloComponent implements OnInit {
  portfolioForm: FormGroup = new FormGroup({
    imageBefore: new FormControl('', Validators.required),
    imageAfter: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });




  @Input() profileInfo: MyProfile;



  SubmitPortfilo = false;

  tabsIndex = 0;
  show = false;
  buttonicon = 'pi pi-pencil';
  hide: any;
  readonly: Boolean = true;
  pointerEvent: boolean = true;
  modalRef?: BsModalRef;
  @Input() guestMode: boolean = false;


  constructor( private modalService: BsModalService,private profileService: ProfileService) { }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (changes) {
      // center role rating
      this.profileInfo = changes.profileInfo.currentValue;
      this.profileInfo.portfolio.forEach(x => this.portfolioForm.patchValue(x));
    }
  }

  headerSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 1000,
    autoplay: true,
    autoplayHoverPause: true,
    items: 1,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
    responsive: {
      940: {
        items: 1,
      },
    },
    nav: true,
  };




  ngOnInit(): void {

  }


  get f(): { [key: string]: AbstractControl } {
    return this.portfolioForm.controls;
  }


  uploadBeforeImage(event: any | Event) {

    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        this.portfolioForm.patchValue({
          imageBefore: event.target?.result
          // beforeFileName: file.name
        })
      }

    }

  }


  uploadAfterImage(event: any) {

    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        console.log(event.target?.result);
        this.portfolioForm.patchValue({
          imageAfter: event.target?.result
          // beforeFileName: file.name
        })
      }

    }
  }

  toggleIcon() {
    this.portfolioForm.reset();
    this.show = !this.show;

    if (this.show) {
      console.log(`show vaule ${this.show}`);
      this.readonly = false;
      this.buttonicon = 'pi pi-times-circle';
      // console.log(this.show)
      console.log(this.readonly);
      this.pointerEvent = false;
      console.log(`this pointer vaule is ${this.pointerEvent}`);
    } else {
      this.show = false;
      console.log(`show vaule ${this.show}`);
      this.buttonicon = 'pi pi-pencil';
      this.readonly = true;
      this.pointerEvent = true;
      console.log(`this pointer vaule is ${this.pointerEvent}`);
    }
  }


  OnSubmitPortfilo() {
    this.SubmitPortfilo = true;
    if (this.portfolioForm.invalid) {
      console.log(this.portfolioForm.value);
      console.log('Fields are required');
      return;
    } else {
      let array = [];
      this.profileInfo.portfolio.forEach(element => {
        array.push(element);
      });
      array.push(this.portfolioForm.value);
      debugger
      let body = { role: this.profileInfo.role, _id: this.profileInfo._id, portfolio: array }
      this.profileService.updateProfile(body).subscribe((res: IProfileInfoResponse) => {
        this.profileInfo = res.profile;
        this.show = false;
      })
    }
    this.SubmitPortfilo = true;
  }

  removeImage(index: number) {
    this.profileInfo.portfolio.splice(index, 1)
    let body = { role: this.profileInfo.role, _id: this.profileInfo._id, portfolio: this.profileInfo.portfolio }
    this.profileService.updateProfile(body).subscribe((res: IProfileInfoResponse) => {
      this.profileInfo = res.profile;
      this.show = false;
    })

  }
  clickedItemImage:any

  openModal(template: TemplateRef<any>,getImageValue:any) {
    this.modalRef = this.modalService.show(template, {
      class: 'ambassadorListingModal',
    });
    this.clickedItemImage = getImageValue
  }
}
