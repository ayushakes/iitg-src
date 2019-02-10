import { Component, OnInit, OnDestroy } from '@angular/core';
import { MyEvent } from '../models/event.model';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
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
ngOnDestroy(){
  this.commonService.unsubscribeEvents();
}
}
