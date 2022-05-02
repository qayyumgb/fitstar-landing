import {
  Component, Input,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {
  AbstractControl,
  FormArray, FormControl,
  FormGroup, Validators
} from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';
import {  clientPreference,
  inHomeTraining,
  onineLiveTraining,
  dietType,
   Activities, Certificates, Compensation,FitnessTypeList, Interests, Languages, Professions, Specialties ,age,measurement,weightList,bodyType,Ethnicity,skinTone,eyeColor,hairLength,Tattoos,Piercings,Experience} from 'src/app/shared/constants/dropdown-list';
import { ActiveRoleEnum } from 'src/app/shared/enum/profile.enum';
import { CenterAbout, IProfileInfo, ModelAbout, MyProfile, ProAbout, ProductRating } from './../../../../../shared/interfaces/profile.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  role: string;
  @Input() profileInfo: MyProfile;
  activeRoleEnum = ActiveRoleEnum;

  fitnessTypeList = FitnessTypeList
  languages: any[] = Languages;
  specialties: any[] = Specialties;
  professions: any[] = Professions;
  Interests: any[] = Interests;
  certificates: any[] = Certificates;
  Activities: any[] = Activities;
  selectedOption: string = "select an option"


  SubmitFitnessCenter = false;
  submitAboutFitnessModel = false;
  submitAboutFitnessProfessional = false;

  fitnessCenterRole: boolean = true;
  fitnessKeyInfo: boolean = false;
  fitnessProfessionalRole: boolean = false;


  tabsIndex = 0;
  show = false;
  buttonIcon = 'pi pi-pencil';
  hide: any;
  readonly: Boolean = true;
  pointerEvent: boolean = true;

  age=age;
  measurement=measurement;
  weightList=weightList
  bodyType=bodyType
  Ethnicity=Ethnicity
  skinTone=skinTone
  eyeColor=eyeColor
  hairLength=hairLength
  Tattoos=Tattoos
  Piercings=Piercings
  Experience=Experience
  Compensation=Compensation
  clientPreference=clientPreference
  inHomeTraining=inHomeTraining
  onineLiveTraining=onineLiveTraining
  dietType=dietType
  



  // Center Role Form
  aboutFitnessCenterForm: FormGroup = new FormGroup({
    _id: new FormControl(''),
    openSince: new FormControl('', Validators.required),
    fitnessCenterType: new FormControl('', Validators.required),
    specialities: new FormControl('', Validators.required),
    hoursOfOperation: new FormControl('', Validators.required),
    membership: new FormControl('', Validators.required),
    accomplishments: new FormControl('', Validators.required),
    ourFitnessPro: new FormControl('', Validators.required),
    ourStory: new FormControl('', Validators.required),
    language: new FormControl('', Validators.required),
    productsRating: new FormArray([])
  });

  // Modal Role Form
  aboutFitnessModelForm: FormGroup = new FormGroup({
    _id: new FormControl(''),
    name: new FormControl('', Validators.required),
    profileUrl: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    bodyType: new FormControl('', Validators.required),
    ethnicity: new FormControl('', Validators.required),
    skinTone: new FormControl('', Validators.required),
    eyeColor: new FormControl('', Validators.required),
    hairLength: new FormControl('', Validators.required),
    tattoos: new FormControl('', Validators.required),
    piercings: new FormControl('', Validators.required),
    experience: new FormControl('', Validators.required),
    languages: new FormControl('', Validators.required),
    workingWithMedia: new FormControl(false, Validators.required),
    modelingInterest: new FormControl('', Validators.required),
    compensation: new FormControl('', Validators.required),
    noteAboutCompensation: new FormControl('', Validators.required),
    activites: new FormControl('', Validators.required),
    aboutMe: new FormControl('', Validators.required),
    productsRating: new FormArray([]),
    height: new FormGroup({
      number: new FormControl('', Validators.required),
      measurement: new FormControl('', Validators.required)
    }),
    weight: new FormGroup({
      number: new FormControl('', Validators.required),
      measurement: new FormControl('', Validators.required)
    })
  });



  @Input() guestMode: boolean = false;





  // Professional Role Form
  aboutFitnessProfessionalForm: FormGroup = new FormGroup({
    _id: new FormControl(''),
    personal: this.personalFormGroup(),
    qualifications: this.qualificationsForm(),
    business: this.businessForm(),

  });


  personalFormGroup() {
    return new FormGroup({
      height: new FormGroup({
        number: new FormControl('', Validators.required),
        measurement: new FormControl('', Validators.required)
      }),
      weight: new FormGroup({
        number: new FormControl('', Validators.required),
        measurement: new FormControl('', Validators.required)
      }),
      name: new FormControl('', Validators.required),
      profileUrl: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      dietType: new FormControl('', Validators.required),
      bodyType: new FormControl('', Validators.required),
      activites: new FormControl('', Validators.required),
      aboutMe: new FormControl('', Validators.required),
      productsRating: new FormArray([]),
      sponsorImages: new FormArray([]),
    })
  }
  qualificationsForm() {
    return new FormGroup({
      degree: new FormControl('', Validators.required),
      professions: new FormControl('', Validators.required),
      experience: new FormControl('', Validators.required),
      certification: new FormControl('', Validators.required),
      specialities: new FormControl('', Validators.required),
      languages: new FormControl('', Validators.required),
      trainingMethodsAndStyles: new FormControl('', Validators.required),
      fitnessAward: new FormControl(),
      productsRating: new FormArray([]),

    })
  }

  businessForm() {
    return new FormGroup({
      name: new FormControl('', Validators.required),
      clientPreference: new FormControl('', Validators.required),
      availabilityForInHomeTraining: new FormControl('', Validators.required),
      availabilityForOnLineliveTraining: new FormControl('', Validators.required),
      trainingRates: new FormControl('', Validators.required),
      noteAboutTrainingRates: new FormControl('', Validators.required),

    })
  }


  

  get productRatingArray() {
    return this.aboutFitnessCenterForm.get('productsRating') as FormArray;
  }

  get productRatingModalArray() {
    return this.aboutFitnessModelForm.get('productsRating') as FormArray;
  }

  get proAboutQualifications() {
    return this.aboutFitnessProfessionalForm.get('qualifications') as FormGroup;
  }
  get proAboutPersonal() {
    return this.aboutFitnessProfessionalForm.get('personal') as FormGroup;
  }
  get productRatingProArray() {
    return this.proAboutPersonal.get('productsRating') as FormArray;
  }



  constructor(private profileService: ProfileService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (changes) {
      this.role = this.profileInfo?.role;
      this.role === changes?.activeRole?.currentValue;
      this.profileInfo === changes.profileInfo.currentValue;
      this.aboutFitnessCenterForm.patchValue(this.profileInfo?.centerAbout);
      this.aboutFitnessModelForm.patchValue(this.profileInfo?.modelAbout);
      this.aboutFitnessProfessionalForm.patchValue(this.profileInfo?.proAbout);
      // center role rating
      this.profileInfo?.centerAbout?.productsRating.forEach((x: ProductRating) => {
        this.productRatingArray?.push(this.productRatingForm(x));
      })
      // modal role rating
      this.profileInfo?.modelAbout?.productsRating.forEach((x: ProductRating) => {
        this.productRatingModalArray?.push(this.productRatingForm(x));
      })
      // pro role rating
      this.profileInfo?.proAbout.personal?.productsRating.forEach((x: ProductRating) => {
        this.productRatingProArray?.push(this.productRatingForm(x));
      })
    }
  }

  ngOnInit(): void {

  }


  get f3(): { [key: string]: AbstractControl } {
    return this.aboutFitnessCenterForm.controls;
  }
  get f4(): { [key: string]: AbstractControl } {
    return this.aboutFitnessModelForm.controls;
  }
  get f5(): { [key: string]: AbstractControl } {
    return this.aboutFitnessProfessionalForm.controls;
  }
 

  addFitnessProductRating(type: ActiveRoleEnum) {
    switch (type) {
      case ActiveRoleEnum.Center:
        this.productRatingArray.push(this.productRatingForm())
        break;
      case ActiveRoleEnum.Modal:
        this.productRatingModalArray.push(this.productRatingForm());
        break;
      case ActiveRoleEnum.Pro:
        this.productRatingProArray.push(this.productRatingForm());
        break;
    }
  }


  toggleIcon() {
    this.show = !this.show;

    if (this.show) {
      console.log(`show vaule ${this.show}`);
      this.readonly = false;
      this.buttonIcon = 'pi pi-times-circle';
      // console.log(this.show)
      console.log(this.readonly);
      this.pointerEvent = false;
      console.log(`this pointer vaule is ${this.pointerEvent}`);
    } else {
      this.show = false;
      console.log(`show vaule ${this.show}`);
      this.buttonIcon = 'pi pi-pencil';
      this.readonly = true;
      this.pointerEvent = true;
      console.log(`this pointer vaule is ${this.pointerEvent}`);
    }
  }

  productRatingForm(data?: ProductRating) {
    return new FormGroup({
      product: new FormControl(data?.product ? data.product : ''),
      review: new FormControl(data?.review ? data.review : ''),
      starts: new FormControl(data?.starts ? data.starts : 0)
    })
  }
  removeFitnessCenterRating(index: number) {
    this.productRatingArray.removeAt(index);
  }
  removeFitnessModalRating(index: number) {
    this.productRatingModalArray.removeAt(index);
  }
  removeFitnessProRating(index: number) {
    this.productRatingProArray.removeAt(index);
  }





  OnSubmitFitnessCenter() {
    debugger
    this.SubmitFitnessCenter = true;
    if (this.aboutFitnessCenterForm.invalid) {
      return;
    } else {
      let formValue = this.aboutFitnessCenterForm.value as CenterAbout;
      formValue.language = formValue.language.filter(a => a);
      formValue.specialities = formValue.specialities.filter(s => s);
      formValue.ourFitnessPro = formValue.ourFitnessPro.filter(f => f);
      let body = { role: this.profileInfo.role, centerAbout: formValue };
      this.profileService.updateProfile(body).subscribe((res: IProfileInfo) => {
        this.profileInfo = res.myProfile;
        this.toggleIcon();
      })
    }
  }

  OnSubmitAboutFitnessModel() {
    debugger
    this.submitAboutFitnessModel = true;
    if (this.aboutFitnessModelForm.invalid) {
      console.log(this.aboutFitnessModelForm.value);
      console.log('Fields are required');
      return;
    } else {
      let formValue = this.aboutFitnessModelForm.value as ModelAbout;
      formValue.languages = formValue.languages.filter(f => f);
      formValue.modelingInterest = formValue.modelingInterest.filter(x => x);
      formValue.activites = formValue.activites.filter(x => x);
      let body = { role: this.profileInfo.role, modelAbout: formValue };
      console.log(body);
      this.profileService.updateProfile(body).subscribe((res: IProfileInfo) => {
        this.profileInfo = res.myProfile;
        this.toggleIcon();
      })
    }
    console.log('All Done');
  }

  OnSubmitAboutFitnessProfessional() {
    debugger
    this.submitAboutFitnessProfessional = true;
    if (this.aboutFitnessProfessionalForm.invalid) {
      debugger
      console.log(this.aboutFitnessProfessionalForm.value);
      console.log('Fields are required');
  
      return;
    } else {
      let formValue = this.aboutFitnessProfessionalForm.value as ProAbout;
      formValue.qualifications.certification = formValue.qualifications.certification.filter(x => x);
      formValue.qualifications.languages = formValue.qualifications.languages.filter(x => x);
      formValue.personal.activites = formValue.personal.activites.filter(x => x);
      let body = { role: this.profileInfo.role, proAbout: formValue };
      console.log(body);
      this.profileService.updateProfile(body).subscribe((res: IProfileInfo) => {
        this.profileInfo = res.myProfile;
        this.toggleIcon();
      })
    }
    console.log('All Done');
    // this.submitAboutFitnessModel = true;
  }
}