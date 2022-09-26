import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdiomasCreaeditaComponent } from './page/idiomas/idiomas-creaedita/idiomas-creaedita.component';
import { IdiomasComponent } from './page/idiomas/idiomas.component';
import { ResenasComponent } from './page/resenas/resenas.component';
import { CategoriasComponent } from './page/categorias/categorias.component';
import { CategoriasCreaeditaComponent } from './page/categorias/categorias-creaedita/categorias-creaedita.component';

const routes: Routes = [
  {
  path: 'resenas', component:ResenasComponent,children:[
    
]
},
{
  path: 'idiomas', component:IdiomasComponent,children:[
    {path: 'nuevo', component: IdiomasCreaeditaComponent }
  ]
},
{
  path: 'categorias', component:CategoriasComponent,children:[
    {path: 'nuevo', component: CategoriasCreaeditaComponent}
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
