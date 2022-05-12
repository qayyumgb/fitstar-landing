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
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { SelectItem, PrimeNGConfig } from 'primeng/api';
import { ProfileService } from 'src/app/services/profile.service';
import { IProfileInfo, IProfileInfoResponse, MyProfile } from 'src/app/shared/interfaces/profile.interface';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  editContactForm: FormGroup = new FormGroup({
    gymName1:new FormControl('',Validators.required),
    address1: new FormControl('', Validators.required),
    gymName2:new FormControl(''),
    address2: new FormControl(''),
    gymName3:new FormControl(''),
    address3: new FormControl(''),
    phoneNo: new FormControl('', Validators.required),
    blogLink: new FormControl('', Validators.required),
    facebookLink: new FormControl('', Validators.required),
    instagramLink: new FormControl('', Validators.required),
    twitterLink: new FormControl('', Validators.required),
    youtubeLink: new FormControl('', Validators.required),
    websiteLink: new FormControl('', Validators.required),
    bookingLink: new FormControl('', Validators.required),
    linkForLivePortal: new FormControl('', Validators.required),
    vimeoLink: new FormControl('', Validators.required),
    otherLink: new FormControl('', Validators.required)

  });


  @Input() guestMode: boolean = false;

  SubmitContactForm = false;
  writeAboutUsForm: FormGroup;
  SubmitWriteAboutForm = false;
  submitEditContactForm = false;

  tabsIndex = 0;
  show = false;
  buttonicon = 'pi pi-pencil';
  hide: any;
  readonly: Boolean = true;
  pointerEvent: boolean = true;

  @Input() profileInfo: MyProfile;

  constructor(private profileService: ProfileService, private formBuilder: FormBuilder,) { }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (changes) {
      // center role rating
      this.profileInfo = changes.profileInfo.currentValue;
      this.editContactForm?.patchValue(this.profileInfo.contactUs);
      this.rateUsForm?.patchValue(this.profileInfo)
    }
  }


  ngOnInit(): void {


    this.writeAboutUsForm = this.formBuilder.group({
      writeaboutus: ['', Validators.required],
    })

  }

  contactUsForm:FormGroup= new FormGroup({
//FormFields will added as per Direction of Seniors
name: new FormControl('',Validators.required),
email:new FormControl('',Validators.required),
subject:new FormControl('',Validators.required),
message:new FormControl('',Validators.required)
  })
  
  rateUsForm: FormGroup = new FormGroup({
    ratingComment: new FormControl('', Validators.required),
    rating: new FormControl('', Validators.required)
  })
  get f9(): { [key: string]: AbstractControl } {
    return this.writeAboutUsForm.controls;
  }
  get f10(): { [key: string]: AbstractControl } {
    return this.writeAboutUsForm.controls;
  }
  get f11(): { [key: string]: AbstractControl } {
    return this.editContactForm.controls;
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
  OnSumbitContact() {

    this.SubmitContactForm = true;
    if (this.editContactForm.invalid) {
      console.log(this.editContactForm.value);
      console.log('Fields are required');
      return;
    } else {

      let formValue = this.editContactForm.value;
      let body = { role: this.profileInfo.role, _id: this.profileInfo._id, contactUs: formValue }
      this.profileService.updateProfile(body).subscribe((res: IProfileInfoResponse) => {
        this.profileInfo = res.profile;
      })
    }
    this.SubmitContactForm = true;
  }



  onSubmitWriteAboutUs() {

    this.SubmitWriteAboutForm = true;
    if (this.rateUsForm.invalid) {
      console.log(this.rateUsForm.value);
      console.log('Fields are required');
      return;
    } else {


      let formValue = this.rateUsForm.value;
      formValue.role = this.profileInfo.role;
      formValue._id = this.profileInfo._id;

      this.profileService.updateProfile(formValue).subscribe((res: IProfileInfo) => {
        this.profileInfo = res.myProfile;
      })
    }
    this.SubmitWriteAboutForm = true;
  }

  onEditFormSubmit() {
    this.submitEditContactForm = true;

    if (this.editContactForm.invalid) {
      console.log(this.editContactForm.value);
      console.log('Fields are required');
      return;
    } else {
      console.log(this.editContactForm.value);
      console.log('All Done');
      this.submitEditContactForm = true;
      let body = { role: this.profileInfo.role, _id: this.profileInfo._id, contactUs: this.editContactForm.value }

      this.profileService.updateProfile(body).subscribe((res: IProfileInfoResponse) => {
        this.profileInfo = res.profile;
        this.show = false;
      })
    }
  }
}

