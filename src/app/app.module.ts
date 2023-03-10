import { ComponenteModule } from './componente/componente.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, ComponenteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
