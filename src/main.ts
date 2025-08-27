import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import 'smoothscroll-polyfill';


(window as any).__forceSmoothScrollPolyfill__ = true;

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
