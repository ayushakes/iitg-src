import { Component, OnInit, OnDestroy } from '@angular/core';
import { People } from '../../models/people.model';
import { Subscription } from 'rxjs';
import { CommonService } from '../../shared/common.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit,OnDestroy {
  people:People;
gotPeople:People[]=[];

loading=true;
gotFaculty:People[]=[];


  constructor(private commonService:CommonService) { 
    this.people={
      id:null,
      type:null,
      program:null,
      yearOfJoining:null,
      fName:null,
      mName:null,
      lName:null,
      email:null,
      imgurl:null,
      interest:null,
      batchId:null,
      designation:null,
      phone:null,
      website:null
      
      }

      this.commonService.getPeople();
    this.gotPeople=this.commonService.gotPeople;
    this.loading=false;

    for(let i=0;i<this.gotPeople.length;i++){
      if(this.gotPeople[i].type=='Faculty'){
        this.gotFaculty.push(this.gotPeople[i]);
      }
    }

  
  }

  ngOnInit() {
    
  }
  ngOnDestroy(){
    console.log("unsubscribe faculty");
    this.commonService.unsubscribePeople();
  }

}
