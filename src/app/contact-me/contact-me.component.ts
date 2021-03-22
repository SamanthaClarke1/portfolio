import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { onErrorResumeNext } from 'rxjs';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss', '../content/content-section.scss']
})
export class ContactMeComponent implements OnInit {
  defaultmessage: string = "Email Successfully Sent";
  message?: string = this.defaultmessage;
  sendemail?: any;
  recaptchakey: string = environment.recaptchakey;

  emailtext: string = "";
  emailfrom: string = "";
  emailname: string = "";
  
  sending = false;
  errorHappened = false;
  confirmationVisible = false;

  constructor(private fns: AngularFireFunctions) {
    this.sendemail = this.fns.httpsCallable('sendemail');
  }

  ngOnInit(): void {
  }

  sendForm() {
    console.log('name', this.emailname, 'from', this.emailfrom, 'text', this.emailtext);
    try {
      this.sendemail({ 
        name: this.emailname,
        email: this.emailfrom,
        text: this.emailtext,
      }).subscribe(
        data => {
          this.sending = false;
          this.confirmationVisible = true;
          console.log('contact-me > sendform > subscribe returned, data:', data);
          console.log('confirm visible? ', this.confirmationVisible);

          setTimeout(() => {
            this.confirmationVisible = false;
          }, 3000);
        },
        err => {this.onError(err)}
      );
    } catch(err: any) {
      this.onError(err);
    }
  }
  onError(error) {
    this.sending = false;
    this.errorHappened = true;
    this.message = error.toString();

    setTimeout(()=>{
      this.errorHappened = false;
      setTimeout(()=>{ // to deal with fadeout animation.
        this.message = this.defaultmessage;
      }, 300)
    }, 3000)
  }

  recaptchaResolved(captchaResponse: string) {
    try {
      if(captchaResponse) {
        console.log(`Resolved captcha with response: ${captchaResponse}. Submitting form.`);
        this.sendForm();
      }
      throw new Error("Captcha Failed");
    } catch(err: any) {
      this.onError(err)
    }
  }
}
