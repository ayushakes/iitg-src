import { Component, OnInit } from '@angular/core';
import { openClose } from '../ui/fade.animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    openClose
]
})
export class AboutComponent implements OnInit {
  isOpen:boolean=false;
  constructor() { 
  
    
  }

  ngOnInit() {
    setTimeout(() => {
      this.isOpen=true;
    }, 500);
     }
  }


