import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { DashboardComponent }  from './dashboard.component';

@NgModule({
  imports:      [ BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: DashboardComponent
      }
    ])  
  
   ],
  declarations: [ AppComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
