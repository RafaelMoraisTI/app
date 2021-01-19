import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {LayoutModule} from "./shared/layout/layout.module";
import {SharedDefaultModule} from "./shared/shared-default.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MatMomentDateModule, LayoutModule, SharedDefaultModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
