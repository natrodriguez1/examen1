import { Routes } from '@angular/router';
import { HomeComponent } from './vistas/home/home.component';
import { DataComponent } from './vistas/data/data.component';

export const routes: Routes = [
    {
        path: 'vistas/home',
        component: HomeComponent,
    },
    {
        path: 'vistas/data',
        component: DataComponent,
    },
    {
        path: '',
        redirectTo: 'vistas/home', pathMatch: 'full'
    }
];
