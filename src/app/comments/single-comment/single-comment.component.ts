import { Component, inject, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-single-comment',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './single-comment.component.html',
  styleUrl: './single-comment.component.scss'
})
export class SingleCommentComponent {
  translate = inject(TranslationService);

  @Input() singleComment!:{
    name: string;
    title: string;
    comment: string;
  }
}
