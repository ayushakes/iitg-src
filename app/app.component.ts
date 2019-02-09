import { Component, AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        opacity:1
      })),
      state('closed', style({
        
        opacity: 0,
        
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class AppComponent implements OnInit {
  title = 'iit-app';
  isOpen = false;


  ngOnInit(){
    
 setTimeout(() => {
   this.isOpen=true;
 }, 1000);
  }
}



