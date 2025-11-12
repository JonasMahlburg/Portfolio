import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../translation.service';

type Skill = {
  src: string;
  mobileSrc: string;
  alt: string;
  category: 'frontend' | 'backend' | 'other';
};

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  translate = inject(TranslationService);

  skills: Skill[] = [
    { src: './assets/img/skills/Icons Skills.png', mobileSrc: './assets/img/skills/Angular-mobile.png', alt: 'Angular', category: 'frontend' },
    { src: './assets/img/skills/Icons Skills-2.png', mobileSrc: './assets/img/skills/Typescript-mobile.png', alt: 'TypeScript', category: 'frontend' },
    { src: './assets/img/skills/Icons Skills-3.png', mobileSrc: './assets/img/skills/JavaScript-mobile.png', alt: 'Java-Script', category: 'frontend' },
    { src: './assets/img/skills/Icons Skills-4.png', mobileSrc: './assets/img/skills/HTML-mobile.png', alt: 'HTML', category: 'frontend' },
    { src: './assets/img/skills/Icons Skills-5.png', mobileSrc: './assets/img/skills/CSS-mobile.png', alt: 'CSS', category: 'frontend' },
    { src: './assets/img/skills/Icons Skills-6.png', mobileSrc: './assets/img/skills/API-mobil.png', alt: 'Rest-API', category: 'backend' },
    { src: './assets/img/skills/Icons Skills-7.png', mobileSrc: './assets/img/skills/Git-mobil.png', alt: 'Git', category: 'other' },
    { src: './assets/img/skills/Swift.png', mobileSrc: './assets/img/skills/Swift.png', alt: 'Swift', category: 'other' },
    { src: './assets/img/skills/Python-mobile.png', mobileSrc: './assets/img/skills/Python-mobile.png', alt: 'Python', category: 'backend' },
    { src: './assets/img/skills/Django-mobile.png', mobileSrc: './assets/img/skills/Django-mobile.png', alt: 'Django', category: 'backend' },
    { src: './assets/img/skills/Linux.png', mobileSrc: './assets/img/skills/Linux-mobile.png', alt: 'Linux', category: 'backend' },
    { src: './assets/img/skills/Docker.png', mobileSrc: './assets/img/skills/Docker-mobile.png', alt: 'Docker', category: 'backend' },
    { src: './assets/img/skills/Cloud.png', mobileSrc: './assets/img/skills/Cloud.png', alt: 'Cloud', category: 'backend' },
    { src: './assets/img/skills/PostgreSQL.png', mobileSrc: './assets/img/skills/PostgreSQL.png', alt: 'PostgreSQL', category: 'backend' },
    { src: './assets/img/skills/Redis.png', mobileSrc: './assets/img/skills/Redis.png', alt: 'Redis', category: 'backend' },
    { src: './assets/img/skills/SQL.png', mobileSrc: './assets/img/skills/SQL.png', alt: 'SQL', category: 'backend' },

  ];

  activeFilter: 'all' | 'frontend' | 'backend' = 'all';

  get visibleSkills() {
    if (this.activeFilter === 'all') return this.skills;
    return this.skills.filter(skill => skill.category === this.activeFilter);
  }
}
