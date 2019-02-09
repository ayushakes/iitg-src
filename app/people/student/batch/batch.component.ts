import { Component, OnInit, EventEmitter, Output, DoCheck } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';
import { BatchModel } from '../../../models/batch.model';
import { CommonService } from '../../../shared/common.service';
import { People } from '../../../models/people.model';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit{
  batchName="";
  batchImage="";
  batches:BatchModel[];
  gotPeople:People[]=[];
  people:People;
  batchPeople:People[]=[];

  
  constructor(private studentService:StudentService,private route:ActivatedRoute,private commonService:CommonService) { 
    // this.batchName=this.studentService.batchName;
    // this.batchImage=this.studentService.batchImage;
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
      }
      this.gotPeople=[];
      this.batchPeople=[];
  }

  ngOnInit() {
    this.commonService.getPeople();
    this.gotPeople=this.commonService.gotPeople;

    


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
    for(let i=0;i<this.gotPeople.length;i++){
      if(this.gotPeople[i].batchId==this.batchName){
        this.batchPeople.push(this.gotPeople[i]);
      }
    }
  }




}
