import { Directive, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDefaultImage]',
  host: {
    '(error)': 'updateUrl()',
    '(load)': 'load()',
    '[src]': 'src'
  }
})
export class DefaultImageDirective {
  @Input() src: string;
  @Input() default: string;
  @HostBinding('class') className: any;

  updateUrl() {
    this.src = this.default;
  }
  load() {
    this.className = 'image-loaded';
  }
}