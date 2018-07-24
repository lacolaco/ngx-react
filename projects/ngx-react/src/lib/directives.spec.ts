import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import * as React from 'react';

import { ReactModule } from './ngx-react.module';

const createTestElement = (message: string) =>
  React.createElement('div', {}, message);

@Component({
  template: `
  <react-render [element]="element"></react-render>
  `
})
class SimpleTestComponent {
  element = createTestElement('Test Element');
}

@Component({
  template: `
  <react-render [element]="element$ | async"></react-render>
  `
})
class AsyncElementTestComponent {
  element$ = new BehaviorSubject(createTestElement('Test Element'));

  updateMessage() {
    this.element$.next(createTestElement('Updated'));
  }
}

describe('RenderDirective', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactModule],
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

    it('should render', () => {
      expect(component).toBeTruthy();
      const element = fixture.nativeElement as HTMLElement;
      expect(element.textContent).toEqual('Test Element');

      component.updateMessage();
      fixture.detectChanges();
      expect(element.textContent).toEqual('Updated');
    });
  });
});
