import { Component, AfterViewInit, ElementRef, OnInit } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import {  openClose } from './ui/fade.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    openClose
  
     
   
  ]
})
export class AppComponent implements OnInit {
  title = 'iit-app';
  isOpen = false;
  
  ngOnInit(){
    
 setTimeout(() => {
   this.isOpen=true;
 },500);
  }
}



