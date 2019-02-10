import { trigger, animate, transition, style, state } from '@angular/animations';

export const openClose =

trigger('openClose', [
    // ...
    state('open', style({
      opacity:1
    })),
    state('closed', style({
      
      opacity: 0,
      
    })),
    transition('open => closed', [
      animate('1s')
    ]),
    transition('closed => open', [
      animate('0.5s')
    ]),
  ]);