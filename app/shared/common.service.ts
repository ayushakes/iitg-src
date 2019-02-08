import { Subscription, Observable } from "rxjs";
import { People } from "../models/people.model";
import { Injectable } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";
import { map } from "rxjs/operators";

@Injectable()
export class CommonService{
    people:People;
gotPeople:People[]=[];
peopleSubscription:Subscription;
people$: Observable<People[]>;
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
        }
        this.gotPeople=[];
        
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

    }

    console.log(this.gotPeople);

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
    this.peopleSubscription.unsubscribe();
}

}