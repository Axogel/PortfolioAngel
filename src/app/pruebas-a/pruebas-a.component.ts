import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-pruebas-a',
  templateUrl: './pruebas-a.component.html',
  styleUrls: ['./pruebas-a.component.css']
})
export class PruebasAComponent implements AfterViewInit {
  ngAfterViewInit() {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
    const nextButton = document.querySelector('.swiper-button-next') as HTMLElement;
    const prevButton = document.querySelector('.swiper-button-prev') as HTMLElement;

    nextButton.addEventListener('click', () => {
      swiper.slideNext();
    });

    prevButton.addEventListener('click', () => {
      swiper.slidePrev();
    });
  }
}
