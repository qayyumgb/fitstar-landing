import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DefaultImageDirective } from './directive/default-image.directive';
import { DomSanitizerPipe } from './pipe/dom-sanitizer.pipe';
import { TabFilterPipe } from './pipe/tab-filter.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DefaultImageDirective,
    DomSanitizerPipe,
    TabFilterPipe,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    DefaultImageDirective,
    DomSanitizerPipe,
    TabFilterPipe
  ]
})
export class SharedModule { }
