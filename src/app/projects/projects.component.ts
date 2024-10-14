import { Component, inject } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { CommonModule } from '@angular/common';
import {RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SingleProjectComponent, CommonModule, RouterModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
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
    image: "project1.image",
    title: "project1.name",
    skills: "project1.skills",
    description: "project1.description",
    play: "project1.play",
    gitHub: "project1.gitHub",
    id: 1,
  },
  {
    image: "project2.image",
    title: "project2.name",
    skills: "project2.skills",
    description: "project2.description",
    play: "project2.play",
    gitHub: "project2.gitHub",
    id: 2,
  },
  {
    image:"project3.image",
    title: "project3.name",
    skills: "project3.skills",
    description: "project3.description",
    play: "project3.play",
    gitHub: "project3.gitHub",
    id: 3,
  }
  ];

}
