import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ChangeBgColorDirective]'
})
export class ChangeBgColorDirective {

  constructor( private el: ElementRef, private renderer: Renderer2) {
  }

 @HostBinding("style.border") 
 border: string = "";


 @HostListener('mouseup') onMouseUp(event:MouseEvent) {
    
    console.log("tre")
    this.ChangeBgColor("orange");
    this.border = "5px solid green"
 }



  ChangeBgColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color)
  }
  


}
