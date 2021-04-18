import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CochesRoutingModule } from './coches-routing.module';
import { ListaMarcasComponent } from './lista-marcas/lista-marcas.component';

@NgModule({
  declarations: [
    ListaMarcasComponent
  ],
  imports: [
    CommonModule,
    CochesRoutingModule
  ]
})
export class CochesModule { }
