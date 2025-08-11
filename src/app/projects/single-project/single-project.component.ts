import { NgClass } from '@angular/common';
import { Component, inject, Input, HostListener, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [NgClass, TranslateModule],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent implements OnInit {
  translate = inject(TranslationService);

  @Input() singleProject!: {
    image: string;
    title: string;
    skills: string;
    description: string;
    play: string;
    gitHub: string;
    id: number;
  };

  aosAnimation = 'flip-left';

  ngOnInit() {
    this.setAosAnimation(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setAosAnimation(event.target.innerWidth);
  }

  setAosAnimation(width: number) {
    this.aosAnimation = width < 700 ? 'fade-up' : 'flip-left';
  }
}



