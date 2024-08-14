import { Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { MainContentComponent } from './main-content/main-content.component';

export const routes: Routes = [
{path:'', component: MainContentComponent},
{path:'Imprint', component: ImprintComponent},
{path:'PrivacyPolicy', component: PrivacyPolicyComponent}

];
