import { Routes } from '@angular/router';
import {FrontPageComponent} from "./front-page/front-page.component";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {DetailsComponent} from "./details/details.component";

export const routes: Routes = [
  {
    path: '',
    component: FrontPageComponent,
    title: 'Front Page'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login Page'
  },
  {
    path: 'signup',
    component: SignupComponent,
    title: 'Signup Page'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Details Page'
  }
];
