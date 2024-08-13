import { NgClass } from '@angular/common';
import { Component, inject, Input} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [NgClass, TranslateModule],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {
  translate = inject(TranslationService);
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
 


