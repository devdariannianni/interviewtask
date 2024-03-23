import { Route } from '@angular/router';
import { SliderComponent } from './slider/slider.component';

// export const routes: Routes = [];
export const APP_ROUTES: Route[] = [
    // {
    //     path:'slider',
    //     loadComponent: () => import('./navbar/navbar.component').then(c => c.NavbarComponent)
    //     }
    {
        path: '',
        component: SliderComponent
    }
]