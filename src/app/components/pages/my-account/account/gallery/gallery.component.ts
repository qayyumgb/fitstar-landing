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
import { allowedImgTypes } from 'src/app/shared/enum/profile.enum';
import { ProfileService } from 'src/app/services/profile.service';
import { IProfileInfo, IProfileInfoResponse, MyProfile } from 'src/app/shared/interfaces/profile.interface';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  GalleryImageForm: FormGroup = new FormGroup({
    gallery: new FormArray([], Validators.required)
  });

  SubmitGalleryImage = false
  totalFileLength: number = 0;

  tabsIndex = 0;
  show = false;
  buttonicon = 'pi pi-pencil';
  hide: any;
  readonly: Boolean = true;
  pointerEvent: boolean = true;
  @Input() profileInfo: MyProfile;

  @Input() guestMode: boolean = false;


  constructor(
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {
  }

  galleryFormGroup(url?: string | any) {

    return new FormGroup({
      url: new FormControl(url ? url : '')
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (changes) {
      // center role rating
      this.profileInfo = changes.profileInfo.currentValue;
    }
  }

  addNewImage() {
    this.galleryArray.push(this.galleryFormGroup());
  }


  get galleryArray() {
    return this.GalleryImageForm.get('gallery') as FormArray;
  }

  get f8(): { [key: string]: AbstractControl } {
    return this.GalleryImageForm.controls;
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

  async fileUpload(event: Event | any) {
    let files = [...(event.target.files as File[])];
    if (files.some((x) => !allowedImgTypes.includes(x.type))) {
      this.resetFileElement(event);
      return;
    }
    this.totalFileLength = event.target.files.length;
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        reader.onload = (event) => {
          debugger
          console.log(event.target?.result);
          this.galleryArray.push(this.galleryFormGroup(event.target?.result))
        }

        reader.readAsDataURL(event.target.files[i]);
      }
    }

  }

  resetFileElement(event: Event | any) {
    event.target.value = '';
  }

  OnSumbitGallery() {

    this.SubmitGalleryImage = true;
    if (this.GalleryImageForm.invalid) {
      console.log(this.GalleryImageForm.value);
      console.log('Fields are required');
      return;
    } else {
      let body = { role: this.profileInfo.role, _id: this.profileInfo._id, gallery: this.galleryArray.value }
      this.profileService.updateProfile(body).subscribe((res: IProfileInfoResponse) => {
        this.profileInfo = res.profile;
      })
    }
    this.SubmitGalleryImage = true;
  }
}
