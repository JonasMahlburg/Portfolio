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
  },
    {
    image:"project4.image",
    title: "project4.name",
    skills: "project4.skills",
    description: "project4.description",
    play: "project4.play",
    gitHub: "project4.gitHub",
    id: 4,
  },
      {
    image:"project5.image",
    title: "project5.name",
    skills: "project5.skills",
    description: "project5.description",
    play: "project5.play",
    gitHub: "project5.gitHub",
    id: 5,
  },
        {
    image:"project6.image",
    title: "project6.name",
    skills: "project6.skills",
    description: "project6.description",
    play: "project6.play",
    gitHub: "project6.gitHub",
    id: 5,
  },
  ];

  visibleProjects = [...this.projects];
  activeFilter: 'all' | 'frontend' | 'backend' = 'all';

  switchToFrontend() {
    this.visibleProjects = this.projects.filter(p => p.id >= 1 && p.id <= 3);
    this.activeFilter = 'frontend';
  }

  switchToBackend() {
    this.visibleProjects = this.projects.filter(p => p.id >= 4 && p.id <= 5);
    this.activeFilter = 'backend';
  }

  showAll() {
    this.visibleProjects = [...this.projects];
    this.activeFilter = 'all';
  }

}
