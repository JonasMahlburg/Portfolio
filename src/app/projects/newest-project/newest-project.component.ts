import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';
import { SingleProjectComponent } from '../single-project/single-project.component';

@Component({
  selector: 'app-newest-project',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, SingleProjectComponent],
  templateUrl: './newest-project.component.html',
  styleUrl: './newest-project.component.scss'
})
export class NewestProjectComponent {
  translate = inject(TranslationService);
  projects: {
    image: string;
    title: string;
    skills: string;
    description: string;
    play: string;
    gitHub: string;
   id: number}[] =[
  {
    image: "project0.image",
    title: "project0.name",
    skills: "project0.skills",
    description: "project0.description",
    play: "project0.play",
    gitHub: "project0.gitHub",
    id: 0,
  }
 ];
}


