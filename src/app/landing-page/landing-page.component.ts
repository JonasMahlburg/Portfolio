import { Component, inject } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavBarComponent, TranslateModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  translate = inject(TranslationService);
}
