import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {
  // el HostListener nos sirve para que escuche a un elemento

  @HostListener('mouseenter') onMouserEnter(){
    this.element.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.element.nativeElement.style.backgroundColor = 'blue';
  }
  constructor(
    private element: ElementRef
  ) {}


}
