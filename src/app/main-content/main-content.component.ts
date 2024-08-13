import { Component } from '@angular/core';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { WhyMeComponent } from '../why-me/why-me.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { CommentsComponent } from '../comments/comments.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [LandingPageComponent,
    WhyMeComponent,
    SkillsComponent,
    ProjectsComponent,
    CommentsComponent,
    ContactComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
