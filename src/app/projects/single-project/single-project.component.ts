import { NgClass } from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [NgClass],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {
@Input() singleProject!: {
  image: string;
  title: string;
  skills: string;
  description: string;
  play: string;
  gitHub: string;
id: number;
}

}
 


