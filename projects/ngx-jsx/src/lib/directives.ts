import { Directive, ElementRef, Inject, Input } from '@angular/core';
import { JSX_RENDERER } from './tokens';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'jsx-render'
})
export class JsxRenderDirective {
  @Input()
  set element(element: JSX.Element) {
    this.render(element);
  }

  constructor(
    private elementRef: ElementRef,
    @Inject(JSX_RENDERER) private jsxRenderer: Function
  ) {}

  private render(element: JSX.Element) {
    this.jsxRenderer(element, this.elementRef.nativeElement);
  }
}
