import {  Routes} from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ErrorPageComponent } from './error-page/error-page.component';

export const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'Imprint', component: ImprintComponent },
  { path: 'PrivacyPolicy', component: PrivacyPolicyComponent },
  { path: 'error', component: ErrorPageComponent },
  { path: '**', component: ErrorPageComponent }
];
