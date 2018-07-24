import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactModule } from '@lacolaco/ngx-react';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
