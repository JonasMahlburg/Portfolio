import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-comment',
  standalone: true,
  imports: [],
  templateUrl: './single-comment.component.html',
  styleUrl: './single-comment.component.scss'
})
export class SingleCommentComponent {

  @Input() singleComment!:{
    name: string;
    title: string;
    comment: string;
  }
}
