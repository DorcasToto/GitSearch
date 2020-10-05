import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOnHover]'
})
export class OnHoverDirective {

  constructor(private elem: ElementRef, private renderer: Renderer2) {
    //this.elem.nativeElement.style.backgroundColor = '#f9c128';
  }
  setColor(color: string) {
    this.renderer.setStyle(
      this.elem.nativeElement, 'backgroundColor', color
    );
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.setColor('#2BBBAD')
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.setColor('#fff')
  }


}
