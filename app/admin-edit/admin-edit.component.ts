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
      }
    

    this.id=this.route.snapshot.params['id'];
   this.peopleSubscription= this.db.collection('users').doc<People>(this.id).valueChanges().subscribe((result:People)=>{
      console.log(result);
      console.log(this.id);

      this.people={
        type:result.type,
      program:result.program,
      yearOfJoining:result.yearOfJoining,
      fName:result.fName,
      mName:result.mName,
      lName:result.lName,
      email:result.email,
      imgurl:result.imgurl,
      interest:result.interest,

      }
    });

    

    

  }
  onSubmit(form:NgForm){
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
