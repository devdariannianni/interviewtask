import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input} from '@angular/core';

import {
    register as registerSwiperElements
} from 'swiper/element/bundle'

registerSwiperElements()
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
