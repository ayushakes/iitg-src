import { Component, OnInit, OnDestroy } from '@angular/core';
import { People } from '../models/people.model';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { Subscription } from 'rxjs';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit,OnDestroy {
people:People;
gotPeople:People[]=[];
peopleSubscription:Subscription;


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
    batchId:null
    }
    
   }

   onSubmit(form:NgForm){
    
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
       batchId:this.people.program+this.people.yearOfJoining
     });

       
     


     

     
   }
  ngOnInit() {
    this.commonService.getPeople();
    this.gotPeople=this.commonService.gotPeople;

  }
  ngOnDestroy(){
    this.commonService.unsubscribePeople();

  }

}
