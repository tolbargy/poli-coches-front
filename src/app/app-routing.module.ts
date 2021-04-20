import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from '@core/inicio/inicio.component';

const routes: Routes = [
    {
        path: "",
        redirectTo: "inicio",
        pathMatch: "full"
    },
    {
        path: 'inicio',
        component: InicioComponent
    },
    {
        path: 'coches',
        loadChildren: () => import('@modules/coches/coches.module').then(m => m.CochesModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }







