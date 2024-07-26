import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
    selector: 'app-landingPage',
    standalone: true,
    imports: [CommonModule, NavBarComponent],
    template:'<app-nav-bar>',
    styles:['h1 {color: blue}'],
})

export class landingPageComponent{

}