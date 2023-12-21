import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormrecargasComponent } from './formrecargas/formrecargas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormSaveRecargasComponent } from './form-save-recargas/form-save-recargas.component';


@NgModule({
  declarations: [
    AppComponent,
    FormrecargasComponent,
    FormSaveRecargasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
