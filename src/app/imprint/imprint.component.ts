import { Component, inject, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})


export class ImprintComponent implements OnInit {
  ngOnInit() {
    window.scrollTo(0, 0);
  }
  translate = inject(TranslationService);
}


