import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-protfolio',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './protfolio.component.html',
  styleUrl: './protfolio.component.scss'
})
export class ProtfolioComponent {
 
  portfolioSlide: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay:true,
    margin:20,
    //navSpeed: 600,
    navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      760: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
    nav: true,
  };
}
