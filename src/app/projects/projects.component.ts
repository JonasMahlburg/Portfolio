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
  }];

  projectsDE: {
    image: string;
    title: string;
    skills: string;
    description: string;
    play: string;
    gitHub: string;
   id: number}[] =[
  {
    image: "../../../assets/img/app-screens/startscreen_2.png",
    title: "El Pollo Loco",
    skills: "Java-Script | CSS | HTML",
    description: "Ein lustiges 'Jump and Run' Spiel in dem man ein riesiges Huhn mit Salsaflaschen besiegen muss",
    play: "blub",
    gitHub: "https://github.com/JonasMahlburg/El-Pollo-Loco",
    id: 1,
  },
  {
    image: "../../../assets/img/app-screens/JOIN-Screen.png",
    title: "JOIN",
    skills: "Firebase | Java-Script | CSS | HTML",
    description: "Eine Web-Anwendung zum Visualisieren und Organisieren von Teamabläufen",
    play: "blub",
    gitHub: "https://github.com/JonasMahlburg/El-Pollo-Loco",
    id: 2,
  },
  {
    image: "../../../assets/img/app-screens/Pokedex-Screen.png",
    title: "Pokédex",
    skills: "Rest API | Java-Script | CSS | HTML",
    description: "Sammlung von Einträgen der Pokemon der ersten Generation unter Zugriff auf eine API.",
    play: "blub",
    gitHub: "https://github.com/JonasMahlburg/El-Pollo-Loco",
    id: 3,
  }];
}
