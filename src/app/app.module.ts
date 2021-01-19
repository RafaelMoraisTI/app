import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {SharedDefaultModule} from "./shared/shared-default.module";
import {RouterModule} from "@angular/router";
import {LayoutModule} from "./layout/layout.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MatMomentDateModule, SharedDefaultModule, RouterModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
