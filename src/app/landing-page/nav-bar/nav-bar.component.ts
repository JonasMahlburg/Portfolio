import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  @ViewChild('myElement') myElement!: ElementRef;


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

