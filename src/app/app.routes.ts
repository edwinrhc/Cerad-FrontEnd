import {Routes} from '@angular/router';
import {LoginComponent} from './features/auth/login/login.component';
import {DefaultLayoutComponent} from './layout/default-layout/default-layout.component';

export const routes: Routes = [

  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'upload',
        loadComponent: () => import('./features/uploads/uploads/uploads.component').then(m => m.UploadsComponent)
      },
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},

    ]
  }
  ,
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./features/auth/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
