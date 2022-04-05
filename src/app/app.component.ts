import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { SharedService } from './components/services/shared.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fitStar-landing';
  constructor(private sharedService: SharedService) { }
  isLoading: boolean = false;


  ngOnInit(): void {
    this.sharedService.loaderSubject.pipe(delay(0)).subscribe((res) => {
      this.isLoading = res;
    });
  }
}
