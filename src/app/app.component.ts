import { Component, Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  templateUrl: './templates/app.component.html',
  styleUrls: [ './templates/app.component.css' ]
})
export class AppComponent  { 

  noteList : any[] = [];

  constructor(private http: Http) {
    http.get('./api/Notes')
    .map(res => res.json())
    .subscribe(noteList => this.noteList = noteList);
  }

}
