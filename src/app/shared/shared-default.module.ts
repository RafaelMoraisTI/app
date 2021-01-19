import {CommonModule} from '@angular/common';
import {LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ConfirmationService, SharedModule} from "primeng/api";
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
import {Layout1Module} from "../layout/layout/layout.module";
import {LayoutModule} from "../layout/layout.module";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
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
        LayoutModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        CommonModule,
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
        LayoutModule,
    ],
    providers: [
        ConfirmationService,
        { provide: LOCALE_ID, useValue: 'pt'  }

    ]
})

export class SharedDefaultModule {
}
