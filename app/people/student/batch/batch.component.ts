import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';
import { BatchModel } from '../../../models/batch.model';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {
  batchName="";
  batchImage="";
  batches:BatchModel[];
  

  
  constructor(private studentService:StudentService,private route:ActivatedRoute) { 
    // this.batchName=this.studentService.batchName;
    // this.batchImage=this.studentService.batchImage;
  }

  ngOnInit() {
    this.studentService.batchStart=true;

    this.batches=this.studentService.batches;
    this.batchName=this.route.snapshot.params['name'];

    for(let i=0;i<this.studentService.batches.length;i++){
      if(this.batchName===this.studentService.batches[i].name)
      {
        this.batchImage=this.studentService.batches[i].imgurl;
      }
      else{continue;}

    }
  }

}
