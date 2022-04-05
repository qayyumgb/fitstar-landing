import {
  Component, Input, OnInit, SimpleChanges
} from '@angular/core';
import {
  AbstractControl,
  FormArray, FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PrimeNGConfig } from 'primeng/api';
import { ProfileService } from 'src/app/services/profile.service';
import { IProfileInfo, IProfileInfoResponse, IVideo, MyProfile } from 'src/app/shared/interfaces/profile.interface';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  modalRef?: BsModalRef;
  formVideo: FormGroup = new FormGroup({
    videos: new FormArray([])
  });
  @Input() profileInfo: MyProfile;


  buttonIcon = 'pi pi-pencil';
  @Input() guestMode: boolean = false;



  SubmitVideo = false;
  tabsIndex = 0;
  show = false;
  hide: any;
  readonly: Boolean = true;
  pointerEvent: boolean = true;
  role: string = "";

  constructor(private primengConfig: PrimeNGConfig, private profileService: ProfileService) { }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (changes) {
      // center role rating
      this.role = this.profileInfo.role;
      this.profileInfo = changes.profileInfo.currentValue;
      this.profileInfo?.videos.forEach((x: IVideo) => {
        this.videoArray?.push(this.videoFormGroup(x));
      })
    }
  }


  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }




  get f6(): { [key: string]: AbstractControl } {
    return this.formVideo.controls;
  }

  get videoArray() {
    return this.formVideo.get('videos') as FormArray;
  }

  videoFormGroup(data?: IVideo) {
    return new FormGroup({
      url: new FormControl(data?.url ? data.url : '', Validators.required),
      videoType: new FormControl(data?.videoType ? data.videoType : '', Validators.required),
      _id: new FormControl(data?._id ? data._id : '')
    })
  }

  removeVideo(index: number) {
    this.videoArray.removeAt(index);
  }

  toggleIcon() {
    this.show = !this.show;
    if (this.show) {
      this.readonly = false;
      this.buttonIcon = 'pi pi-times-circle';
      this.pointerEvent = false;
    } else {
      this.show = false;
      this.buttonIcon = 'pi pi-pencil';
      this.readonly = true;
      this.pointerEvent = true;
    }
  }

  OnSubmitVideo() {
    debugger
    this.SubmitVideo = true;
    if (this.formVideo.invalid) {
      console.log(this.formVideo.value);
      console.log('Fields are required');
      return;
    } else {
      let formValue = this.formVideo.value;
      let payLoad = { __id: this.profileInfo._id, role: this.role, videos: formValue.videos.filter((x: IVideo) => x.url !== '' && x.videoType !== '') };
      this.profileService.updateProfile(payLoad).subscribe((res: IProfileInfoResponse) => {
        debugger
        this.profileInfo = res.profile;
      })

    }
  }

  addNewYoutubeLink() {
    this.videoArray.push(this.videoFormGroup());
  }
}
