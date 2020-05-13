import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductividadService {
  constructor(private http: HttpClient) {}

  /* ########################### T R A E R   D A T A ########################### */
  /* ### 1.0 [GET] • DATOS PRODUCTIVIDAD ###  */
  getData() {
    const url = `https://demo.medinet.cl/api/dashboard/productividad/?format=json`;
    // Datos generales de la ficha
    return this.http.get(url).pipe(
      map(
        // Consulta exitosa
        (data: any) => {
          console.log(data);
          let total: number = 0;
          let sucursales: any[] = [];
          let periodos: any[] = [];
          let meses: any[] = [];

          data.forEach((item) => {
            total += Number(item.total);
            sucursales.push(item.sucursal);
            periodos.push(item.anio);
            meses.push(this.obtenerMes(item.mes));            
          });

          let dataProductividad: any = {
            productividad: data,
            sucursales: this.eliminarRepetidos(sucursales),
            periodos: this.eliminarRepetidos(periodos),
            meses: this.eliminarMesesRepetidos(meses),
            total
          };

          console.log('dataProductividad: ', dataProductividad);

          return dataProductividad;
        },
        // error en la petición
        (error) => {
          console.error(error);
          return 'error';
        }
      ),
      // Catch de errores
      catchError((error) => throwError(error))
    );
  }

  /* =================================
    •     VALIDAR DATA SERVICIOS
  ==================================== */
  obtenerMes(mes) {

    switch (mes) {
      case 1:
        return { id: mes, glosa: 'Enero' };
      case 2:
        return { id: mes, glosa: 'Febrero' };
      case 3:
        return { id: mes, glosa: 'Marzo' };
      case 4:
        return { id: mes, glosa: 'Abril' };
      case 5:
        return { id: mes, glosa: 'Mayo' };
      case 6:
        return { id: mes, glosa: 'Junio' };
      case 7:
        return { id: mes, glosa: 'Julio' };
      case 8:
        return { id: mes, glosa: 'Agosto' };
      case 9:
        return { id: mes, glosa: 'Septiembre' };
      case 10:
        return { id: mes, glosa: 'Octubre' };
      case 11:
        return { id: mes, glosa: 'Noviembre' };
      case 12:
        return { id: mes, glosa: 'Diciembre' };
      default:
        break;
    }

  }

  eliminarRepetidos(data) {
    let flag: any = {};
    return data.filter((item) => {
      let exists = !flag[item] || false;
      flag[item] = true;
      return exists;
    });
  }
  eliminarMesesRepetidos(data) {
    let flag: any = {};
    return data.filter((item) => {
      let exists = !flag[item.id] || false;
      flag[item.id] = true;
      return exists;
    });
  }
}
