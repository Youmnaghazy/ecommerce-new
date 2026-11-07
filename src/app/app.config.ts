import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors, withXhr } from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import { headerInterceptor } from './core/interceptors/Header/header-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(CookieService),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes ,withInMemoryScrolling({scrollPositionRestoration:"top"}), withViewTransitions()), provideClientHydration(),
    provideHttpClient(withInterceptors([headerInterceptor])),

  ]
};
