import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CochesRoutingModule } from './coches-routing.module';
import { ListaMarcasComponent } from './lista-marcas/lista-marcas.component';
import { ListaModelosComponent } from './lista-modelos/lista-modelos.component';
import { InfoModeloComponent } from './info-modelo/info-modelo.component';

@NgModule({
  declarations: [
    ListaMarcasComponent,
    ListaModelosComponent,
    InfoModeloComponent
  ],
  imports: [
    CommonModule,
    CochesRoutingModule
  ]
})
export class CochesModule { }
