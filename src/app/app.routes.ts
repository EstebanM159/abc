import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RegisterPageComponent } from './auth/pages/register-page/register-page.component';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';

export const routes: Routes = [
  {path:'auth',
    component:AuthComponent,
    children:[
      {path:'register',
        component:RegisterPageComponent
      },
      {
        path:'login',
        component:LoginPageComponent
      }
    ]
  },
  {
    path:'**',
    redirectTo:'auth/login'
  }
];
