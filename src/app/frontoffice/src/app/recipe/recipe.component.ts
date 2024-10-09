
import { Component, AfterViewInit } from '@angular/core';

declare var $: any;

interface OwlCarouselOptions {
  autoplay: boolean;
  smartSpeed: number;
  margin: number;
  loop: boolean;
  center: boolean;
  dots: boolean;
  nav: boolean;
  navText: string[];
  responsive: {
    0: { items: number };
    576: { items: number };
    768: { items: number };
    992: { items: number };
  };
}

@Component({
  selector: 'app-project-carousel',
  template: `
    <div class="project-carousel owl-carousel container row g-4">



       
      <div class="col-md-14 d-flex justify-content-center align-items-start" style="min-height: 100px;">
      <div class="position-relative h-100">
      <a href="" class="d-block product-item rounded">
        <img src="assets/img/woman-thinking.jpg" alt="">
        <div class="bg-white shadow-sm text-center p-4 position-relative mt-n5 mx-4">
          <h4 class="text-primary">Less stress</h4>
          <span class="text-body">Thinking about recipes and how to prepare them can be one of the most energy draining tasks for individuals who cook daily. When you plan your weekly meals in advance with our tailored suggestions, you can free yourself from the stress of constant decision-making.</span>
        </div>
      </a>
    </div>
    </div>      


      <div class="col-md-14 d-flex justify-content-center align-items-center" style="min-height: 100px;">
      <div class="position-relative h-100">
      <a href="" class="d-block product-item rounded">
        <img src="assets/img/scale.jpg" alt="">
        <div class="bg-white shadow-sm text-center p-4 position-relative mt-n5 mx-4">
          <h4 class="text-primary">Reach your health goals</h4>
          <span class="text-body">With our calorie needs calculator and tracker features, you can monitor your calorie intake throughout the week, ensuring you stay on the path to reach your desired goals.</span>
        </div>
      </a></div></div>

    </div>
  `,

})

export class RecipeComponent implements AfterViewInit {
  // Configuration for the carousel
  carouselOptions: OwlCarouselOptions = {
    autoplay: true,
    smartSpeed: 1000,
    margin: 0,
    loop: true,
    center: true,
    dots: false,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
    responsive: {
      0: { items: 1 },
      576: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
    },
  };

  ngAfterViewInit() {
    // Initialize the Owl Carousel after the view is initialized
    $('.project-carousel').owlCarousel(this.carouselOptions);
  }
}

