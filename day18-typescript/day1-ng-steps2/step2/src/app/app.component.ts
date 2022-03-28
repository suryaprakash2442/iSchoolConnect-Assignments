import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Binding 101</h1>
    <hr>
    <h2>{{title}}</h2>
    <h2 innerHT ></h2>
    <h3 [class]="ischool">can i be a red box</h3>
    <input type="text" [value]="title">
  `,
  styles : [`
    .redbox{
      width : 400px;
      height : 100px;
      border : 2px solid red;
      padding : 10px;
    }
  `]
})
export class AppComponent {
  title = 'this is my step2 in angular';
  ischool = "redbox"
}
