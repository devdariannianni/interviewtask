import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { SliderComponent } from './slider/slider.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, NavbarComponent,RouterLink,SliderComponent
     ],
     schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'interviewtask';
  
}
