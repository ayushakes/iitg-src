import { Component, OnInit, OnDestroy } from '@angular/core';
import { People } from '../models/people.model';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { Subscription } from 'rxjs';
import { CommonService } from '../shared/common.service';
import { MyEvent } from '../models/event.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit,OnDestroy {
people:People;
gotPeople:People[]=[];
peopleSubscription:Subscription;
loading=true;

myEvent:MyEvent;
gotEvents:MyEvent[]=[];
eventSubscription:Subscription;




  constructor( private db:AngularFirestore, private commonService:CommonService) {
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
    
    this.myEvent={
      id:null,
    type:null,
    postedOn:null,
    startDate:null,
    endDate:null,
    title:null,
    description:null,
    imgurl:null
    }
    
    
   }

   onSubmitPeople(form:NgForm){this.loading=true;
    
     this.db.collection('users').add({
       
       type:this.people.type,
       program:this.people.program,
       yearOfJoining:this.people.yearOfJoining,
       fName:this.people.fName,
       mName:this.people.mName,
       lName:this.people.lName,
       email:this.people.email,
       imgurl:this.people.imgurl,
       interest:this.people.interest,
       batchId:this.people.program+this.people.yearOfJoining,
       designation:this.people.designation,
       phone:this.people.phone,
       website:this.people.website
     });

       this.loading=false;
     
}

onSubmitEvent(form:NgForm){this.loading=true;
    
  this.db.collection('AllEvents').add({
    
    type:this.myEvent.type,
    postedOn:this.myEvent.postedOn,
    startDate:this.myEvent.startDate,
    endDate:this.myEvent.endDate,
    title:this.myEvent.title,
    description:this.myEvent.description,
    imgurl:this.myEvent.imgurl

  });

    this.loading=false;
  
}



  ngOnInit() {
    this.commonService.getPeople();
    this.gotPeople=this.commonService.gotPeople;
    this.commonService.getEvents();
    this.gotEvents=this.commonService.gotEvents;
    this.loading=false;

  }
  ngOnDestroy(){
    this.commonService.unsubscribePeople();
    this.commonService.unsubscribeEvents();

  }

}
