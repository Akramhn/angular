import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(private _el:ElementRef) {
    this._el.nativeElement.style.color="red";
  }
  @HostListener('mouseenter') onMouseEnter(){
    this._el.nativeElement.style.color="black";
  }
  @HostListener('mouseleave') onMouseLeave(){
    this._el.nativeElement.style.color="red";
  }

}
