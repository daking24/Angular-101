import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { WarningSuccessComponent } from './warning-success/warning-success.component';
import { WarningDangerComponent } from './warning-danger/warning-danger.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningDangerComponent,
    WarningSuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
