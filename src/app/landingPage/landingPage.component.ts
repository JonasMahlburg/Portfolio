import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
    selector: 'app-landingPage',
    standalone: true,
    imports: [CommonModule, NavBarComponent],
    template: `
    <app-nav-bar></app-nav-bar>
    <section>
    <div class="leadToContact">contact me</div>
    <div class="title">
        <h2>Frontend Developer</h2><br>
        <h1>Jonas Mahlburg</h1>
    </div>
    <img class="profilePicture" src="" alt="Hier könnte ihre Werbung stehen">
</section>`,
    styleUrls: ['./landingPage.component.scss']
})

export class landingPageComponent{

}