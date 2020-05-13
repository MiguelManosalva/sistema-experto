import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';

// Services
import { ProductividadService } from './services/productividad.service';

//Pipes
import { FormatMoneda } from './pipes/formatMoneda.pipe';

@NgModule({
  declarations: [AppComponent, FormatMoneda],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  exports: [MaterialModule],
  providers: [ProductividadService],
  bootstrap: [AppComponent],
})
export class AppModule {}
