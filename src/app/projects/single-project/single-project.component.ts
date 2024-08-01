import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [],
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

}

// index= this.singleProject.id;

constructor(){
  // if (this.index  % 2 == 0) {
  //   document.getElementById('this.singleProject.id')?.classList.add('singleProjectReverse');
  // }
}
 

}
