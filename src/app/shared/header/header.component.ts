import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/components/services/auth.service';
import { SharedService } from 'src/app/components/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  toggleMenu = false;
  isAuthenticated: boolean = false;
  headerLogo: boolean = true;
  subscription: Subscription = null as any;


  constructor(private router: Router, private authService: AuthService, private sharedService: SharedService) {
    router.events.subscribe((val) => {
      // see also 
      this.toggleMenu = false
    });
  }

  ngOnInit(): void {
    this.sharedService.getHeaderData.subscribe(res => {
      res ? this.headerLogo = false : this.headerLogo = true;
    })
    this.isAuthenticated = this.authService.isAuthenticated() as boolean;
  }

  authCheck() {
    if (this.isAuthenticated) {
      this.authService.logout();
    }
    this.router.navigate(['/auth/login']);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription?.unsubscribe();
  }



}
