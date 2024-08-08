import { Component } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { CommonModule } from '@angular/common';
import {RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SingleProjectComponent, CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: {
    image: string;
    title: string;
    skills: string;
    description: string;
    play: string;
    gitHub: string;
   id: number}[] =[
  {
    image: "../../../assets/img/app-screens/El Pollo Loco Screen blank.png",
    title: "El Pollo Loco",
    skills: "Java-Script | CSS | HTML",
    description: "a short and Fun Jump and Run game where you have to throw Salsa Bottles at a giant Chicken",
    play: "blub",
    gitHub: "https://github.com/JonasMahlburg/El-Pollo-Loco",
    id: 1,
  },
  {
    image: "../../../assets/img/app-screens/El Pollo Loco Screen blank.png",
    title: "JOIN",
    skills: "Firebase | Java-Script | CSS | HTML",
    description: "Web Application with Databank for Team organization with a KanbanBoard",
    play: "blub",
    gitHub: "https://github.com/JonasMahlburg/El-Pollo-Loco",
    id: 2,
  },
  {
    image: "../../../assets/img/app-screens/El Pollo Loco Screen blank.png",
    title: "Pokédex",
    skills: "Rest API | Java-Script | CSS | HTML",
    description: "Collection of gen1 Pokemon with various Stats, using a Rest API",
    play: "blub",
    gitHub: "https://github.com/JonasMahlburg/El-Pollo-Loco",
    id: 3,
  }];

  getProcessedProject(project: any, index: number): any {
    if (index % 2 === 1) { // Check if index is odd (for every second element)
      return this.mirrorProject(project);
    }
    return project;
  }

  mirrorProject(project: any): any {
    // Logic to mirror the project object, e.g., reversing the title or description
    return {
      ...project,
      title: project.title.split('').reverse().join(''), // Example of mirroring title
      description: project.description.split('').reverse().join('') // Example of mirroring description
    };
  }

}
