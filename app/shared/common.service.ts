import { Subscription, Observable } from "rxjs";
import { People } from "../models/people.model";
import { Injectable } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";
import { map } from "rxjs/operators";
import { MyEvent } from "../models/event.model";

@Injectable()
export class CommonService{
    people:People;
gotPeople:People[]=[];
peopleSubscription:Subscription;
people$: Observable<People[]>;
myEvent:MyEvent;
gotEvents:MyEvent[]=[];
eventSubscription:Subscription;
myEvent$:Observable<MyEvent[]>;




constructor(private db:AngularFirestore){
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
        this.gotPeople=[];

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
            this.gotEvents=[];
        
}



getPeople(){

    
    
    this.people$ = this.db.collection('users').snapshotChanges().pipe(map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as People;
        const id = action.payload.doc.id;

        return { id, ...data };

      });
    })
);



this.peopleSubscription=this.people$.subscribe(result=>{
    
    console.log(result);
    for(let i=0;i<result.length;i++){
        this.gotPeople[i]=result[i];
        this.gotPeople[i].id=result[i].id;
        this.gotPeople[i].batchId=result[i].program+result[i].yearOfJoining;

    }

    

})
  }

  getEvents(){

    
    
    this.myEvent$ = this.db.collection('AllEvents').snapshotChanges().pipe(map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as MyEvent;
        const id = action.payload.doc.id;

        return { id, ...data };

      });
    })
);



this.eventSubscription=this.myEvent$.subscribe(result=>{
    
    console.log(result);
    for(let i=0;i<result.length;i++){
        this.gotEvents[i]=result[i];
        this.gotEvents[i].id=result[i].id;
      

    }

    

})
  }





    // this.peopleSubscription=this.db.collection('users').valueChanges().subscribe(((result:People[])=>{
    //     for(let i=0;i<result.length;i++){
    //     this.gotPeople.push({
    //      type:result[i].type,
    //      program:result[i].program,
    //      yearOfJoining:result[i].yearOfJoining,
    //      fName:result[i].fName,
    //      mName:result[i].mName,
    //      lName:result[i].lName,
    //      email:result[i].email,
    //      imgurl:result[i].imgurl,
    //      interest:result[i].interest
    //     }
    //     );
    //     console.log(result);

    //     }
        
    //   }));

unsubscribePeople(){
    if(this.peopleSubscription){
    this.peopleSubscription.unsubscribe();

    console.log("unsubscribed");}
}

unsubscribeEvents(){
    if(this.eventSubscription){
    this.eventSubscription.unsubscribe();

    console.log(" events unsubscribed");}
}

}
