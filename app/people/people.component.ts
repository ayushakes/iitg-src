import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit,OnChanges {
 loading=false;

  constructor(private router:Router) {
    this.router.navigate(["people/student"]);
   }

  ngOnInit() {
         


  }
  ngOnChanges(){
    

  }
  

}
