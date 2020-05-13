import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardProductividadComponent } from './components/card-productividad/card-productividad.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

// Services
import { ProductividadService } from './services/productividad.service';

//Pipes
import { FormatMoneda } from './pipes/formatMoneda.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FormatMoneda,
    NavbarComponent,
    CardProductividadComponent,
    BuscadorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  exports: [MaterialModule],
  providers: [ProductividadService],
  bootstrap: [AppComponent],
})
export class AppModule {}
