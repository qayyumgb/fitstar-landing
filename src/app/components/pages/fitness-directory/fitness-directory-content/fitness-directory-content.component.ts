import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ProfileService } from 'src/app/services/profile.service';
import { Specialties } from 'src/app/shared/constants/dropdown-list';
import { IFitPro } from 'src/app/shared/interfaces/fit-pro.interface';
import { IFitnessDirFilter } from 'src/app/shared/interfaces/landing-page.interface';
import { ActivatedRoute } from '@angular/router';
import { MyProfile } from 'src/app/shared/interfaces/profile.interface';
@Component({
  selector: 'app-fitness-directory-content',
  templateUrl: './fitness-directory-content.component.html',
  styleUrls: ['./fitness-directory-content.component.scss']
})
export class FitnessDirectoryContentComponent implements OnInit {
  specialistsList: any[] = Specialties;
  @Input() itemList: any[] = [];
  public _role: any;

  get getRole(): string {
    return this._role;
  }
  @Input() set role(value: string) {
    this._role = value;
    console.log(`ROle of User is ${this._role}`);
    this.searchForm.get('role')?.setValue(value);

  }


  constructor(private profileService: ProfileService) {

  }

  searchForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    location: new FormControl(''),
    role: new FormControl(''),
    specialities: new FormControl('')
  })

  ngOnInit() {

    console.log(this.itemList)
  }

  search() {
    let searchValue = this.searchForm.value;
    this.profileService.filterFitnessDir(searchValue).subscribe((response: IFitPro) => {
      this.itemList = response.users;
    })
  }


}
