import {NgModule} from '@angular/core';
import {Layout1Module} from "./layout/layout.module";


@NgModule({
  imports: [
   Layout1Module
  ],
  exports: [
    Layout1Module
  ]
})
export class LayoutModule{}
