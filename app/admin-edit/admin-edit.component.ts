import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscribable } from 'rxjs/Observable';
import { People } from '../models/people.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit,OnDestroy {
  people:People;
  peopleSubscription:Subscription;
id="";
item="";
peoples:Observable<People[]>
  constructor(private route:ActivatedRoute, private db:AngularFirestore ,private router:Router) { 
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
     
      
      
  }

  ngOnInit() {

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
    

    this.id=this.route.snapshot.params['id'];
   this.peopleSubscription= this.db.collection('users').doc<People>(this.id).valueChanges().subscribe((result:People)=>{
      console.log(result);
      console.log(this.id);


      if(this.people.type=='Student'){
        this.people={
          type:result.type,
          program:"",
          yearOfJoining:result.yearOfJoining,
          fName:result.fName,
          mName:result.mName,
          lName:result.lName,
          email:result.email,
          imgurl:result.imgurl,
          interest:result.interest,
          batchId:result.program+result.yearOfJoining,
          designation:"",
        phone:0,
        website:""
    
    
          }
      }
      
      else if(this.people.type=='Faculty'){
        this.people={
          type:result.type,
          program:"",
          yearOfJoining:result.yearOfJoining,
          fName:result.fName,
          mName:result.mName,
          lName:result.lName,
          email:result.email,
          imgurl:result.imgurl,
          interest:result.interest,
          batchId:"",
          designation:result.designation,
        phone:result.phone,
        website:result.website
    
    
          }
      }
      
    });

    

    

  }
  onSubmit(form:NgForm){
    console.log(this.people)
    this.db.collection('users').doc<People>(this.id).update(this.people);

  }

  onDelete(){
    this.db.collection('users').doc<People>(this.id).delete();
    this.router.navigate(['/admin']);

  }
  ngOnDestroy(){
    this.peopleSubscription.unsubscribe();

  }

  
}
