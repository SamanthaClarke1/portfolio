import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss', '../content/content-section.scss']
})
export class ContactMeComponent implements OnInit {
  errorMessage?: string;
  sendemail?: any;
  recaptchakey: string = environment.recaptchakey;

  emailtext: string = "";
  emailfrom: string = "";
  emailname: string = "";
  
  confirmationVisible = false;

  constructor(private fns: AngularFireFunctions) {
    this.sendemail = this.fns.httpsCallable('sendemail');
  }

  ngOnInit(): void {
  }

  sendForm() {
    console.log('name', this.emailname, 'from', this.emailfrom, 'text', this.emailtext);
    this.sendemail({ 
      name: this.emailname,
      email: this.emailfrom,
      text: this.emailtext,
    }).subscribe(data => {
      this.confirmationVisible = true;
      console.log('contact-me > sendform > subscribe returned, data:', data);
      console.log('confirm visible? ', this.confirmationVisible);
      setTimeout(() => {
        this.confirmationVisible = false;
      }, 2500);
    });
  }

  recaptchaResolved(captchaResponse: string) {
    if(captchaResponse) {
      console.log(`Resolved captcha with response: ${captchaResponse}. Submitting form.`);
      this.sendForm();
    }
  }
}
