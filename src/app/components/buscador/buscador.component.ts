import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent {

  @Input() sucursales: any[] = [];
  @Input() periodos: any[] = [];
  @Input() meses: any[] = [];

  @Output() buscarSucursal: EventEmitter<any> = new EventEmitter();

  public showFilter: boolean = false;

}
