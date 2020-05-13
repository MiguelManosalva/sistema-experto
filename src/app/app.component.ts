import { Component } from '@angular/core';
import { ProductividadService } from './services/productividad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public cargando: boolean = true;
  private productividad: any[];
  public productividadBsq: any[];
  public sucursales: any[];
  public periodos: any[];
  public meses: any[];
  public total: number = 0;
  public bsq: string;

  constructor(private _productividadService: ProductividadService) {

    this._productividadService.getData().subscribe((data) => {
      
      this.productividad = data.productividad;
      this.productividadBsq = data.productividad;
      this.sucursales = data.sucursales;
      this.periodos = data.periodos;
      this.meses = data.meses;
      this.total = data.total;

      this.cargando = false;
    });
  }

  buscarSucursal(bsq) {

    if (bsq === 0) return (this.productividadBsq = this.productividad);

    this.productividadBsq = this.productividad;
    let data = this.productividadBsq.filter((e) => {
      let prevision: string = e.prevision.toLowerCase();
      let sucursal: string = e.sucursal.toLowerCase();
      let busqueda: string = bsq.toLowerCase();

      return (
        prevision.indexOf(busqueda) > -1 || sucursal.indexOf(busqueda) > -1
      );
    });

    this.productividadBsq = data;
  }
}
