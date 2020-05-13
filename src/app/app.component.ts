import { Component } from '@angular/core';
import { ProductividadService } from './services/productividad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public cargando: boolean = true;
  private productividad: any;
  public productividadBsq: any;
  public total: number = 0;
  public bsq: string;

  constructor(
    private _productividadService: ProductividadService
  ){
    this._productividadService.getData()
      .subscribe( data => {
        this.productividad = data;
        this.productividadBsq = data;

        data.map( item => {
          this.total += Number(item.total);
        })

        this.cargando = false;
      })
  }

  buscarSucursal(){
    this.productividadBsq = this.productividad;
    let data = this.productividadBsq
      .filter( e => { 
        let prevision: string = e.prevision.toLowerCase();
        let sucursal: string = e.sucursal.toLowerCase();
        let busqueda: string = this.bsq.toLowerCase();

        return prevision.indexOf(busqueda) > -1 || sucursal.indexOf(busqueda) > -1
      });

    this.productividadBsq = data;
  }
}
