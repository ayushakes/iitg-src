import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBack]'
})
export class BackDirective implements OnInit {

  constructor(private elref:ElementRef ,private renderer:Renderer2) { }

  ngOnInit(){
    this.renderer.setStyle(this.elref.nativeElement,'background-color','#F6F9f8');
   // this.renderer.setStyle(this.elref.nativeElement,'background-repeat','repeat-y');

  }
}
