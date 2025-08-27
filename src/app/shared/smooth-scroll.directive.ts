import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSmoothScroll]',
  standalone: true
})
export class SmoothScrollDirective {
  @Input('appSmoothScroll') targetId!: string;

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    event.preventDefault();
    const target = document.getElementById(this.targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start' // Stellt sicher, dass das Element am oberen Rand des Viewports ausgerichtet wird
      });
    }
  }
}
