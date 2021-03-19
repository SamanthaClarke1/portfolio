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
  data?: string;
  sendemail?: any;
  
  constructor(private fns: AngularFireFunctions) {
    this.sendemail = fns.httpsCallable('sendemail');
  }

  ngOnInit(): void {
  }

  sendForm() { 
    this.sendemail({ text: 'Test 123 - YAYOI' }).subscribe(data => {
      this.data = data;
    });
  }
}
