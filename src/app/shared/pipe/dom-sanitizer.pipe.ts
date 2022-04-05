import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domSanitizer'
})
export class DomSanitizerPipe implements PipeTransform {


  constructor(protected sanitizer: DomSanitizer) { }

  transform(url: string) {
    let value = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    value = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    return value;
  }
}