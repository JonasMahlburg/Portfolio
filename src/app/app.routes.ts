import { InMemoryScrollingFeature, InMemoryScrollingOptions, provideRouter, Routes, withInMemoryScrolling } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { MainContentComponent } from './main-content/main-content.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'Imprint', component: ImprintComponent },
  { path: 'PrivacyPolicy', component: PrivacyPolicyComponent }
];

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top', // Scrollt zum Anfang der Seite
  anchorScrolling: 'enabled', // Ermöglicht das Scrollen zu Ankerpunkten
};

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);

bootstrapApplication(LandingPageComponent, { // Die Anwendung mit LandingPageComponent starten
  providers: [provideRouter(routes, inMemoryScrollingFeature)],
});
