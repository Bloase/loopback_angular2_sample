import { Component, Input } from '@angular/core';
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

  note: any = { title: '', content: '' };

  constructor(private http: Http) {
    this.updateNoteList();
  }

  updateNoteList() {
    this.http.get('./api/Notes')
    .map(res => res.json())
    .subscribe(noteList => this.noteList = noteList);
  }

  deleteNote(note: any) {
    this.http.delete('./api/Notes/' + note.id)
    .subscribe(ret => { this.updateNoteList(); });
  }

  includeNote() {
    this.http.post('./api/Notes', this.note)
    .subscribe(ret => {
      this.note = {};
      this.updateNoteList();
    });
  }

}
