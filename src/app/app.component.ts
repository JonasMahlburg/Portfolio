import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { landingPageComponent } from "./landingPage/landingPage.component";
import { WhyMeComponent } from './why-me/why-me.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, landingPageComponent, WhyMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
