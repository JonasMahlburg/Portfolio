import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(private translate: TranslateService) {
    const storedLang = localStorage.getItem('preferredLanguage');
    if (storedLang) {
      this.translate.use(storedLang);
    } else {
      this.translate.setDefaultLang('en');
    }
  }

  public switchLanguage(language: string): void {

    this.translate.use(language);
    localStorage.setItem('preferredLanguage', language);
  }
}
