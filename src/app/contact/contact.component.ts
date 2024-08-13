import { NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgClass, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  translate = inject(TranslationService);

  http = inject(HttpClient)

  contactData = {
    name: "",
    email: "",
    message: "",

  }

  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
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

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
console.log('Local klappt');

      ngForm.resetForm();
    }
  }
  updatePlaceholder(input: any) {
    const inputname = document.getElementById('fname') as HTMLInputElement;
    const inputmail = document.getElementById('email') as HTMLInputElement;
    const inputmessage = document.getElementById('message') as HTMLInputElement;

    if (!input.valid && input.touched) {
      inputname.placeholder = "Please tell me your name";
      inputname.value = "";
    } else {
      inputname.placeholder = "Your name...";
    }

    if (!input.valid && input.touched) {
      inputmail.placeholder = "Please tell me your email adress";
      inputmail.value = "";
    } else {
      inputmail.placeholder = "Your email adress";
    }

    if (!input.valid && input.touched) {
      inputmessage.placeholder = "Please right something";
      inputmessage.value = "";
    } else {
      inputmessage.placeholder = "Your message";
    }
  }
}
