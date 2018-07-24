import { Component } from '@angular/core';
import { createElement } from 'react';
import styled from 'react-emotion';
import { Title } from './title';

@Component({
  selector: 'app-root',
  template: `<react-render [element]="appTitle"></react-render>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitle = <AppTitle title={'NgxReact Example'} />;
}

const AppTitle = styled(Title)({
  color: 'red'
});
