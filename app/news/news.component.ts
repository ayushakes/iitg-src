import { Component, OnInit, OnDestroy, AfterContentInit, AfterViewInit } from '@angular/core';
import { MyEvent } from '../models/event.model';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit,OnDestroy,AfterViewInit {
  myEvent:MyEvent;
  gotEvents:MyEvent[]=[];
  constructor(private commonService:CommonService) { 

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

  ngOnInit() {
    
    this.commonService.getEvents();
    this.gotEvents=this.commonService.gotEvents;
    
    
  }
  ngAfterViewInit(){
    
  }

  ngOnDestroy(){
    this.commonService.unsubscribeEvents();
  }
}
