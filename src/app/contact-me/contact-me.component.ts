import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit, Injectable } from '@angular/core';
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
  
  constructor(private fns: AngularFireFunctions) {
    this.sendemail = this.fns.httpsCallable('sendemail');
  }

  ngOnInit(): void {
  }

  sendForm() {
    console.log(this.emailname, this.emailfrom, this.emailtext);
    this.sendemail({ 
      name: this.emailname,
      email: this.emailfrom,
      text: this.emailtext,
    }).subscribe(data => {
      console.log(data);
    });
  }

  recaptchaResolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
}
