import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { StudentService } from './student.service';
import { BatchModel } from '../../models/batch.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit,OnDestroy {
 batches:BatchModel[];
 items: Array<any>;
 subscription:Subscription;
 batchRoute:{name:string,imgurl:string};
loading=true;
  constructor(private studentService:StudentService, private router:Router) { 

  }
  onBatchSelect(img:string,name:string){
    this.studentService.batchImage=img;
    this.studentService.batchName=name;
    this.router.navigate(["/batch"]);
  }

  studentStart(){
    this.batches=[];
   this.subscription= this.studentService.getBatches().subscribe(result=>{
      
      for(let i=0;i<result.length;i++){

        this.batches.push({
          name:result[i].data.name,
          imgurl:result[i].data.imgurl
        });
        
      }
      
      this.studentService.batches=this.batches;
      this.loading=false;
    });

  }
  ngOnInit() { 
    this.studentStart();
    
    
    

  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
