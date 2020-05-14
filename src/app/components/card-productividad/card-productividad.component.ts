import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-productividad',
  templateUrl: './card-productividad.component.html',
  styles: [
  ]
})
export class CardProductividadComponent {

  @Input() productividad: any[] = [];

}
