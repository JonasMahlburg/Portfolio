import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../translation.service';
import { SmoothScrollDirective } from '../shared/smooth-scroll.directive';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [TranslateModule, SmoothScrollDirective],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  translate = inject(TranslationService);

}
