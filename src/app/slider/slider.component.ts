import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input} from '@angular/core';
import Swiper from 'swiper';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import {
  register as registerSwiperElements
} from 'swiper/element/bundle'

registerSwiperElements()

@Component({
  selector: 'app-slider',
  standalone: true,
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SliderComponent {

  
}
