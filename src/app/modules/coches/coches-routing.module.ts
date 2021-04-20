import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoModeloComponent } from './info-modelo/info-modelo.component';
import { ListaMarcasComponent } from './lista-marcas/lista-marcas.component';
import { ListaModelosComponent } from './lista-modelos/lista-modelos.component';

const routes: Routes = [
  {
    path: '',
    component: ListaMarcasComponent
  },
  {
    path: ':idMarca/modelos',
    component: ListaModelosComponent
  },
  {
    path: ':idMarca/modelos/:idModelo',
    component: InfoModeloComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CochesRoutingModule { }
