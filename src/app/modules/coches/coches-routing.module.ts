import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMarcasComponent } from './lista-marcas/lista-marcas.component';

const routes: Routes = [
  {
    path: '',
    component: ListaMarcasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CochesRoutingModule { }
