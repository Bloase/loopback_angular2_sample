import { Component, ElementRef } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: [ 'app/app.component.css' ]
})
export class AppComponent  { 
  title = 'Angular'; 

  constructor(el: ElementRef) {
    setTimeout(() => {
      $(el.nativeElement).foundation();
    });
  }

}
