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
import { IProfileInfo, MyProfile } from 'src/app/shared/interfaces/profile.interface';

@Component({
  selector: 'app-portfilo',
  templateUrl: './portfilo.component.html',
  styleUrls: ['./portfilo.component.scss']
})
export class PortfiloComponent implements OnInit {
  portfolioForm: FormGroup = new FormGroup({
    beforeImage: new FormControl('', Validators.required),
    afterImage: new FormControl('', Validators.required),
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
  @Input() guestMode: boolean = false;


  constructor(private profileService: ProfileService) { }

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
      reader.onload = () => {
        this.portfolioForm.patchValue({
          beforeImage: reader.result,
          // beforeFileName: file.name
        })
      };
    }

  }


  uploadAfterImage(event: any) {

    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.portfolioForm.patchValue({
          afterImage: reader.result,
          // beforeFileName: file.name
        })
      };
    }
  }

  toggleIcon() {
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
      let formValue = this.portfolioForm.value;
      console.log(formValue);
      let body = { role: this.profileInfo.role, _id: this.profileInfo._id, portfolio: [formValue] }
      this.profileService.updateProfile(body).subscribe((res: IProfileInfo) => {
        this.profileInfo = res.myProfile;
      })
    }
    this.SubmitPortfilo = true;
  }
}
