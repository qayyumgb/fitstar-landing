import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MultiSelectModule } from 'primeng/multiselect';
import { RatingModule } from 'primeng/rating';
import { AboutComponent } from './account/about/about.component';
import { AccountComponent } from './account/account.component';
import { ADDComponent } from './account/add/add.component';
import { ContactComponent } from './account/contact/contact.component';
import { GalleryComponent } from './account/gallery/gallery.component';
import { PortfiloComponent } from './account/portfilo/portfilo.component';
import { VideoComponent } from './account/video/video.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MyAccountRoutingModule } from './my-account-routing.module';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [
    AccountComponent,
    AboutComponent,
    VideoComponent,
    PortfiloComponent,
    GalleryComponent,
    ADDComponent,
    ContactComponent,

  ],
  imports: [
    CommonModule,
    MyAccountRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CarouselModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    RatingModule,
    MultiSelectModule,
    SharedModule,
    RadioButtonModule
  ],

})
export class MyAccountModule { }
