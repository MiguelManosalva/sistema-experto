import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductividadService {

  constructor(
    private http: HttpClient
  ) { }

  /* ########################### T R A E R   D A T A ########################### */
  /* ### 1.0 [GET] • DATOS PRODUCTIVIDAD ###  */
  getData() {
    const url = `https://demo.medinet.cl/api/dashboard/productividad/?format=json`;
    // Datos generales de la ficha
    return this.http.get(url)
      .pipe(
        map(
          // Consulta exitosa
          (data: any) => {
            console.log(data);
            
            return data;
          },
          // error en la petición
          error => {
            console.error(error);
            return 'error';
          }
        ),
        // Catch de errores
        catchError(error => throwError(error))
      );
  }

}
