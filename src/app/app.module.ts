import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FiltersPipe } from './pipes/filters.pipe';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    FiltersPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
