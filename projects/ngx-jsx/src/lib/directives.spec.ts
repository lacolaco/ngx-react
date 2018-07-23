import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of as observableOf } from 'rxjs';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { JsxModule } from './ngx-jsx.module';

const createTestElement = () => React.createElement('div', {}, 'Test Element');

@Component({
  template: `
  <jsx-render [element]="element"></jsx-render>
  `
})
class SimpleTestComponent {
  element = createTestElement();
}

@Component({
  template: `
  <jsx-render [element]="element$ | async"></jsx-render>
  `
})
class AsyncElementTestComponent {
  element$ = observableOf(createTestElement());
}

describe('JsxRenderDirective', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        JsxModule.forRoot({
          jsxRenderer: ReactDOM.render
        })
      ],
      declarations: [SimpleTestComponent, AsyncElementTestComponent]
    }).compileComponents();
  }));

  describe('simple', () => {
    let component: SimpleTestComponent;
    let fixture: ComponentFixture<SimpleTestComponent>;

    beforeEach(() => {
      fixture = TestBed.createComponent(SimpleTestComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should render', () => {
      expect(component).toBeTruthy();
      const element = fixture.nativeElement as HTMLElement;
      expect(element.textContent).toEqual('Test Element');
    });
  });

  describe('async', () => {
    let component: AsyncElementTestComponent;
    let fixture: ComponentFixture<AsyncElementTestComponent>;

    beforeEach(() => {
      fixture = TestBed.createComponent(AsyncElementTestComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should render', async(() => {
      expect(component).toBeTruthy();
      const element = fixture.nativeElement as HTMLElement;
      expect(element.textContent).toEqual('Test Element');
    }));
  });
});
