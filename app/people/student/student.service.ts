import { OnInit, Injectable } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";
import { BatchModel } from "../../models/batch.model";
import { BaseAnimationRenderer } from "@angular/platform-browser/animations/src/animation_renderer";
import { Observable } from "rxjs";
import {map} from "rxjs/operators";
import { BatchComponent } from "./batch/batch.component";

@Injectable()

export class StudentService implements OnInit{
    batch:Observable<any>;
    batchImage:string="";
    batchName:string="";
    batches:BatchModel[]=[];
    batchStart=false;

    constructor(private db:AngularFirestore){
        
            
        
    }
    getBatches(){
     this.batch=this.db.collection('Current_Students').snapshotChanges().pipe(map(docArray=>{
         return docArray.map(doc=>{
            return {
             id:doc.payload.doc.id,
             data:doc.payload.doc.data()
         }})
     }))

     return this.batch;
      }
    ngOnInit(){
        

    }
}
