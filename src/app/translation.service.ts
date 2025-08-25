// import { Injectable } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class TranslationService {

//   constructor(private translate: TranslateService) {
//     translate.setDefaultLang('en');
//    }

//    public switchLanguage(language: string): void{
//     this.translate.use(language);
//    }
// }

import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(private translate: TranslateService) {
    // 1. Lade die Sprache beim Start des Services
    const storedLang = localStorage.getItem('preferredLanguage');
    if (storedLang) {
      this.translate.use(storedLang);
    } else {
      // Setze eine Standard-Sprache, falls noch keine gespeichert ist
      this.translate.setDefaultLang('en');
    }
  }

  public switchLanguage(language: string): void {
    // 2. Wechsle die Sprache in der App
    this.translate.use(language);
    
    // 3. Speichere die gewählte Sprache im Local Storage
    localStorage.setItem('preferredLanguage', language);
  }
}
