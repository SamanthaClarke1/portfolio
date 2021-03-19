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
  
  constructor() { 
  }

  ngOnInit(): void {
  }

  sendForm() { // todo: try to rewrite with firebase only
    const params = new HttpParams({fromObject: 
      {'data': JSON.stringify({'text': 'Yayoi'})}
    });
    // see https://firebase.google.com/docs/functions/callable-reference
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json'
    });    
    this.http.post(environment.functionurls.sendemail, params, 
      {headers: httpHeaders}
    ).subscribe({
      next: data => {
        console.log("DATA: ", data);
      },
      error: error => {
        this.errorMessage = error.message;
        console.log("ERR: ", error);
      }
    });
  }
}
