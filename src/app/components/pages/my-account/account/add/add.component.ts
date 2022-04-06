import {
  Component, Input,
  OnInit,
  SimpleChanges,
  TemplateRef
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Compensation, Days, Interests, Specialities as Specialties } from 'src/app/shared/constants/dropdown-list';
import { AddFormType } from 'src/app/shared/enum/fitnessDirectoryEnums';
import { ActiveRoleEnum } from 'src/app/shared/enum/profile.enum';
import { IProfileInfo, IProfileInfoResponse, MyProfile } from 'src/app/shared/interfaces/profile.interface';
import { ProfileService } from './../../../../../services/profile.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class ADDComponent implements OnInit {

  @Input() activeRole: string = 'pro';
  activeRoleEnum = ActiveRoleEnum;
  interests = Interests;
  compensation = Compensation;
  SubmitAddForm: boolean = false;
  @Input() guestMode: boolean = false;
  addFormType = AddFormType;


  addsForm: FormGroup = new FormGroup({

    sessionName: new FormControl('', Validators.required),
    activities: new FormControl('', Validators.required),
    intensityLevel: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    spotsAvailbe: new FormControl('', Validators.required),
    file: new FormControl(null, Validators.required),
    compensation: new FormControl('', Validators.required),
    interests: new FormControl('', this.activeRole == 'modal' ? Validators.required : null),
    serviceTitle: new FormControl('', this.activeRole == 'modal' ? Validators.required : null),
  })

  get f(): { [key: string]: AbstractControl } {
    return this.addsForm.controls;
  }

  modalRef?: BsModalRef;
  tabsIndex = 0;
  show = false;
  buttonicon = 'pi pi-pencil';
  hide: any;
  readonly: Boolean = true;
  pointerEvent: boolean = true;


  specialties: any[] = Specialties;
  selectedspecialities: string[] = [];
  days: any[] = Days;
  selectedDays: string[] = [];
  detailSection: boolean = false;
  updateIndex: number;

  @Input() profileInfo: MyProfile;



  constructor(private profileService: ProfileService, private modalService: BsModalService, private formBuilder: FormBuilder) {


  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (changes) {
      // center role rating
      this.profileInfo = changes.profileInfo.currentValue;
      this.addsForm.patchValue(this.profileInfo.ads);
    }
  }

  ngOnInit(): void {
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
  openModal(template: TemplateRef<any>, type: AddFormType, item: any, index: number) {
    this.updateIndex = index;
    this.addsForm.patchValue(item);

    if (type === AddFormType.Edit) {
      this.detailSection = false;
    }
    else {
      this.addsForm.disable();
      this.detailSection = true;
    }
    this.modalRef = this.modalService.show(template, {
      class: 'model-lg'
    });
  }

  closeMenu() {
    this.modalRef?.hide();
    this.addsForm.enable();
  }

  submitForm(type: AddFormType) {


    if (this.addsForm.invalid) {
      console.log(this.addsForm.value);
      console.log('Fields are required');
      return;
    } else {
      let array: any[] = [];
      this.profileInfo.ads.forEach(x => array.push(x));
      let formValue = this.addsForm.value;
      array.push(formValue);
      let body = { role: this.profileInfo.role, _id: this.profileInfo._id, ads: array } as any;
      this.profileService.updateProfile(body).subscribe((res: IProfileInfoResponse) => {
        this.profileInfo = res.profile;
        this.SubmitAddForm = true;
        this.modalRef?.hide();
        this.show = false
      })
    }
  }





  uploadImage(event: any) {

    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.addsForm.patchValue({
          file: reader.result,
          // beforeFileName: file.name
        })
      };
    }
  }

  removeAdd(index: number) {
    this.profileInfo.ads.splice(index, 1);
    let body = { role: this.profileInfo.role, _id: this.profileInfo._id, ads: this.profileInfo.ads } as any;
    this.profileService.updateProfile(body).subscribe((res: IProfileInfoResponse) => {
      this.profileInfo = res.profile;
      this.SubmitAddForm = true;

    })
  }

  updateAdd() {
    this.profileInfo.ads[this.updateIndex] = this.addsForm.value;
    let body = { role: this.profileInfo.role, _id: this.profileInfo._id, ads: this.profileInfo.ads } as any;
    this.profileService.updateProfile(body).subscribe((res: IProfileInfoResponse) => {
      this.profileInfo = res.profile;
      this.SubmitAddForm = true;
      this.modalRef?.hide();
      this.show = false
    })

  }

}

