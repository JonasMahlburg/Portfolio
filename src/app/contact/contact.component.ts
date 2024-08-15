import { NgClass, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgClass, TranslateModule, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  showPopup: boolean = false;

  translate = inject(TranslationService);

  http = inject(HttpClient)

  contactData = {
    name: "",
    email: "",
    message: "",
    privacyPolicyAccepted: false,

  }

  mailTest = true;

  post = {
    endPoint: 'http://jonas-mahlburg.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            console.log('Vom Server klappt');
            this.showPopup = true; // Popup anzeigen
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log('Local klappt');
      this.showPopup = true; // Popup anzeigen
      ngForm.resetForm();
    }
  }

  closePopup() {
    this.showPopup = false;
  }


}
