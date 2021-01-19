import {NgModule} from '@angular/core';
import {LayoutComponent} from './layout.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {SharedModule} from "primeng/api";
import {RouterModule} from "@angular/router";
import {TableModule} from "primeng/table";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {CalendarModule} from "primeng/calendar";
import {DropdownModule} from "primeng/dropdown";
import {TabViewModule} from "primeng/tabview";
import {StepsModule} from "primeng/steps";
import {MenuModule} from "primeng/menu";
import {DialogModule} from "primeng/dialog";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {TooltipModule} from "primeng/tooltip";
import {FieldsetModule} from "primeng/fieldset";
import {CheckboxModule} from "primeng/checkbox";
import {InputMaskModule} from "primeng/inputmask";
import {InputTextareaModule} from "primeng/inputtextarea";
import {RadioButtonModule} from "primeng/radiobutton";
import {AutoCompleteModule} from "primeng/autocomplete";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    TableModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    CalendarModule,
    DropdownModule,
    TabViewModule,
    StepsModule,
    MenuModule,
    DialogModule,
    ConfirmDialogModule,
    TooltipModule,
    FieldsetModule,
    CheckboxModule,
    InputMaskModule,
    InputTextareaModule,
    RadioButtonModule,
    AutoCompleteModule,
    MatSnackBarModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
  ],
  exports: [
    LayoutComponent
  ]
})
export class Layout1Module{}
