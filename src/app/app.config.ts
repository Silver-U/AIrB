import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";


import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), HttpClientModule],
};