import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// Services
import { ProductividadService } from './services/productividad.service';
import { FormatMoneda } from './pipes/formatMoneda.pipe';

//Pipes


@NgModule({
  declarations: [
    AppComponent,
    FormatMoneda
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductividadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
