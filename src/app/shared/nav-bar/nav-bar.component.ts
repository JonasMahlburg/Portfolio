import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
translate = inject(TranslationService);

  @ViewChild('myElement') myElement!: ElementRef;

    // Toggle the visibility of the pop-up menu
    toggleMenu(): void {
      const popUpMenu = document.getElementById('popUpMenu');
      if (popUpMenu) {
        popUpMenu.classList.toggle('hidden');
        popUpMenu.classList.toggle('show');
      }
    }
}

