import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
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
import { IProfileInfo, IProfileInfoUpdate, ITabsItems, MyProfile } from 'src/app/shared/interfaces/profile.interface';
import { TabsItemsList } from 'src/app/shared/constants/dropdown-list';
import { AccountTabEnum, ActiveRoleEnum } from 'src/app/shared/enum/profile.enum';
import { AuthService } from 'src/app/components/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LandingPageService } from 'src/app/components/services/landing-page.service';
import { IFitPro, IProfileId } from 'src/app/shared/interfaces/fit-pro.interface';
import { IFitnessDirFilter } from 'src/app/shared/interfaces/landing-page.interface';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  modalRef?: BsModalRef;
  ChangeFitnessRole: FormGroup = new FormGroup({
    activeRole: new FormControl('Selected Role'),
  });
  createProfileImage: FormGroup = new FormGroup({
    image: new FormControl()
  });
  fileName: string = "";
  activeRoleEnum = ActiveRoleEnum;
  location: string = '';


  tabsIndex: AccountTabEnum = AccountTabEnum.About;
  accountTabEnum = AccountTabEnum
  show = false;
  buttonicon = 'pi pi-pencil';
  hide: any;
  readonly: Boolean = true;
  pointerEvent: boolean = true;
  Role: boolean = false;
  fitnessCenterRole: boolean = true;
  fitnessKeyInfo: boolean = false;
  fitnessProfessionalRole: boolean = false;
  SubmittedRole = false;
  showRoleContent: boolean = false;
  guestMode: boolean = false;
  SwitchRole:string='';
  tabsItems = [...TabsItemsList];
 

  roles = [
    { id: "center", name: "Fitness Center", },
    { id: "model", name: "Fitness Model" },
    { id: "pro", name: "Fitness Professional" },
  ];

  profileInfo: MyProfile;

  constructor(
    private modalService: BsModalService,
    private profileService: ProfileService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { 
    // this.profileService.getAllProfileInfo().subscribe((res:any)=>{
    //   this.SwitchRole=res.myProfile.activeRole
    //   console.log(this.SwitchRole)
    // })
  }


  ngOnInit(): void {

    let isIdExists: boolean = false;
    let id: string = '';
    this.activatedRoute.params.subscribe(async p => {
      id = p['id'];
      if (id) {
        isIdExists = true;
        return;
      }
    });

  
    if (isIdExists) {
      this.profileService.getProfileById(id).subscribe((response: IProfileId) => {
        this.profileInfo = response.profile;
        this.profileInfo.activeRole = response.profile.role;
       
 
      })


      window.scroll(0, 0);
      this.guestMode = true;
      this.ChangeFitnessRole.patchValue(this.profileInfo);
      this.patchImageData(this.profileInfo);
      this.showRoleContent = true;
    }
    else if (!isIdExists) {
      this.profileService.getAllProfileInfo().subscribe((res: IProfileInfo) => {
        this.profileInfo = res.myProfile;
        this.SwitchRole= "Current User Role Is :"+ res.myProfile.activeRole
        console.log(this.SwitchRole)
        this.location =  res.myProfile.location;
        this.ChangeFitnessRole.patchValue(res.myProfile);
        this.patchImageData(res.myProfile);
        this.showRoleContent = true;
        this.guestMode = false;
      });
    }

    else {
      this.router.navigate(['']);
    }



  }


  patchImageData(res: MyProfile) {
    if (res?.image === null || res?.image.trim().length === 0 || res?.image === undefined) {
      this.createProfileImage?.get('image')?.setValue('https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg');
    }
    else {
      this.createProfileImage?.get('image')?.setValue(res.image);
    }
  }
  saveLocation() {
    let body = {} as IProfileInfoUpdate;
    body.role = this.ChangeFitnessRole.get('activeRole')?.value;
    body.location = this.location;

    this.profileService.updateProfile(body).subscribe(res => {
      this.profileInfo = res.profile;
      this.modalRef?.hide();
    })
  }



  get f1(): { [key: string]: AbstractControl } {
    return this.ChangeFitnessRole.controls;
  }
  get f2(): { [key: string]: AbstractControl } {
    return this.createProfileImage.controls;
  }



  switchTabs(tabs: ITabsItems) {

    this.tabsIndex = tabs.code
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

  toggleRole() {
    console.log('toggle role occurs');
    console.log(this.ChangeFitnessRole.value);
    if (this.ChangeFitnessRole.value == 'Fitness Center') {
      this.fitnessCenterRole = true;
      this.fitnessKeyInfo = false;
      this.fitnessProfessionalRole = false;
    } else if (this.ChangeFitnessRole.value == 'Fitness Model') {
      this.fitnessKeyInfo = true;
      this.fitnessCenterRole = false;
      this.fitnessProfessionalRole = false;
    } else if (this.ChangeFitnessRole.value == 'Fitness Professional') {
      this.fitnessProfessionalRole = true;
      this.fitnessCenterRole = false;
      this.fitnessKeyInfo = false;
    } else {
      this.fitnessCenterRole = false;
      this.fitnessKeyInfo = false;
      this.fitnessProfessionalRole = false;
    }
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      class: 'ambassadorListingModal',
    });
  }

  onRoleSubmit() {
    this.SubmittedRole = true;
    if (this.ChangeFitnessRole.invalid) {
      console.log('Fields are required');
      return;
    } else {
      let body = {} as IProfileInfoUpdate;
      body.role = this.ChangeFitnessRole.get('activeRole')?.value;
      console.log(body.role)
      
      this.profileService.updateProfile(body).subscribe(res => {
        this.profileInfo = res.profile;
      })
    }
    console.log('All Done');
  }
  onProfileImageSubmit() {
    console.log('Role Image Fuc call');
    let body = this.createProfileImage.value as IProfileInfoUpdate;
    body.role = this.profileInfo.activeRole;
    this.profileService.updateProfile(body).subscribe(res => {
      console.log(res);

    })
  }



  uploadFile(event: any) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    this.fileName = file.fileName;
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.createProfileImage.patchValue({
          image: reader.result,
        });
      };
    }
  }


}
