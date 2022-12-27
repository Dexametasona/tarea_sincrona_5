import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavegarComponent } from './navegar/navegar.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    NavegarComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavegarComponent,
    CardComponent
  ],
})
export class ComponenteModule { }
