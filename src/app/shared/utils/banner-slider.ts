

import { OwlOptions } from 'ngx-owl-carousel-o';


export const headerSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 1000,
    autoplay: true,
    autoplayHoverPause: false,
    items: 1,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    responsive: {

        940: {
            items: 1
        }
    },
    nav: true
}
