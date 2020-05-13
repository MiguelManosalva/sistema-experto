import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-productividad',
  templateUrl: './card-productividad.component.html',
  styles: [
  ]
})
export class CardProductividadComponent implements OnInit {

  @Input() productividad: any[] = [];

  constructor() {
    console.log("this.productividad: ", this.productividad);
    
   }

  ngOnInit(): void {
  }

}
