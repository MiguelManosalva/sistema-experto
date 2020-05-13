import {NgModule} from '@angular/core';
import {A11yModule} from '@angular/cdk/a11y';
import { MatSelectModule } from '@angular/material/select';
import { ScrollingModule } from '@angular/cdk/scrolling';


@NgModule({
  exports: [
    A11yModule,
    MatSelectModule,
    ScrollingModule,
  ]
})
export class MaterialModule {}

