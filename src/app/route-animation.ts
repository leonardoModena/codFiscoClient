import {
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes,
} from '@angular/animations';

const optional = { optional: true };
export const fader =
    trigger('routeAnimations', [
        transition('* <=> *', [
            style({ position: 'relative' }),
              query(':enter, :leave', [
                style({
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%'
                })
              ], optional),
              query(':enter', [
                style({ left: '-100%'})
              ]),
              group([
                query(':leave', [
                  animate('1200ms ease', style({ left: '100%'}))
                ], optional),
                query(':enter', [
                  animate('1200ms ease', style({ left: '0%'}))
                ], { optional: true })
              ]),
              // Normalize the page style... Might not be necessary
          
              // Required only if you have child animations on the page
              // query(':leave', animateChild()),
              // query(':enter', animateChild()),
        ]),
    ]);