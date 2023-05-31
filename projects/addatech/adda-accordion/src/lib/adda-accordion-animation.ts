import { animate, state, style, transition, trigger } from '@angular/animations';

export const addaAccordionAnimations = [
  trigger('enterLeaveHeight', [
    transition(':enter', [
      style({ height: 0, opacity: 0 }),
      animate('.3s ease-out',
        style({ height: '*', opacity: 1 }))
    ]),
    transition(':leave', [
      style({ height: '*', opacity: 1 }),
      animate('.3s ease-in',
        style({ height: 0, opacity: 0 }))
    ])
  ]
  ),
  trigger('openCloseStateHeight', [
    state('open', style({
      height: '*',
      opacity: 1
    })),
    state('closed', style({
      height: 0,
      opacity: 0
    })),
    transition('open => closed', [
      style({ height: '*', opacity: 1 }),
      animate('.3s ease-in',
        style({ height: 0, opacity: 0 }))
    ]),
    transition('closed => open', [
      style({ height: 0, opacity: 0 }),
      animate('.3s ease-out',
        style({ height: '*', opacity: 1 }))
    ])
  ])
];
