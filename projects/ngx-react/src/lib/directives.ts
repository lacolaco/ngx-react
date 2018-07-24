import { Directive, ElementRef, Inject, Input } from '@angular/core';
import { render } from 'react-dom';
import { ReactElement } from 'react';

export type ElementType = ReactElement<any>;

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'react-render'
})
export class RenderDirective {
  @Input()
  set element(element: ElementType) {
    this.render(element);
  }

  constructor(private elementRef: ElementRef) {}

  private render(element: ElementType) {
    render(element, this.elementRef.nativeElement);
  }
}
