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
  
    // Example method to show mouse coordinates (not fully implemented)
    // showCoords(event: MouseEvent): void {
    //   const coords = `X: ${event.clientX}, Y: ${event.clientY}`;
    //   console.log(coords);
    // }


  showCoords(event: MouseEvent) {
    let x = event.clientX;
    let y = event.clientY;
    let text = "X coords: " + x + ", Y coords: " + y;
    // document.getElementById("demo").innerHTML = text;
    // console.log(text);
    // if (x >= 879 && x <= 898) {
    //   console.log("x is between 879 and 898");
    //   document.getElementById('language').
    // } else {
    //   console.log("x is not between 879 and 898");
    // }
  }
}

