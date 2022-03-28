import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComp } from './first.component';

// @NgModule({
//   declarations: [ AppComponent, FirstComp ],
//   imports: [ BrowserModule ],
//   providers: [],
//   bootstrap: [AppComponent, FirstComp ]
// })
// export class AppModule { }


@NgModule({
  declarations: [ AppComponent ],
  imports: [ BrowserModule ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

