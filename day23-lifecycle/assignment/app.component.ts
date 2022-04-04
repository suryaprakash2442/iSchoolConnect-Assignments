// ViewChild

import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-root',
  template : `
    <h1>Main Component : Power {{apppower}} </h1>
    <button (click)="increaseChildPower()">Increase Power</button>
    <button (click)="decreaseChildPower()">Decrease Power</button>
    <button (click)="showHide()">Remove Child Component</button>
    <app-child #powerComp *ngIf="show"></app-child>
  `
})
export class AppComponent implements OnInit {
  title = 'steps';
  apppower = 0;
  show = true;
  @ViewChild('powerComp') cc:any
  constructor(){
    console.log("AppComponent's constructor was called")
  }
  ngOnInit(): void {
    console.log("AppComponent's ngOnInit was called")
    this.apppower = 5;
  }
  increaseChildPower(){
    this.cc.increasePower();
  }
  decreaseChildPower(){
    this.cc.decreasePower();
  }


  showHide(){
    this.show = !this.show;
  }
}












// ViewChildren

// import { Component, OnInit, ViewChild } from '@angular/core';
// import { ChildrenComponent } from './children.component';

// @Component({
//   selector: 'app-root',
//   template : `
//     <h1>Main Component </h1>
    
//     <button (click)="showHide()">Remove Child Component</button>
//     <app-children #powerComp *ngIf="show"></app-children>
//   `
// })
// export class AppComponent implements OnInit {
//   title = 'steps';
  
//   show = true;
//   @ViewChild('powerComp') cc:any
//   constructor(){
//     console.log("AppComponent's constructor was called")
//   }
//   ngOnInit(): void {
//     console.log("AppComponent's ngOnInit was called")
//   }

//   showHide(){
//     this.show = !this.show;
//   }
// }














// ViewChild
// ViewChildren
 
// ContentChild
// ContentChildern
