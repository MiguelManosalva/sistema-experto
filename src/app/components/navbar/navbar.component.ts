import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent {

  @Input() cargando: boolean = true;
  @Input() bsq: boolean = true;
  @Output() buscarSucursal: EventEmitter<any> = new EventEmitter();

}
