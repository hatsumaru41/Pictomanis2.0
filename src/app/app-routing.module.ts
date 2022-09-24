import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdiomasCreaeditaComponent } from './page/idiomas/idiomas-creaedita/idiomas-creaedita.component';
import { IdiomasComponent } from './page/idiomas/idiomas.component';
import { ResenasComponent } from './page/resenas/resenas.component';

const routes: Routes = [
  {
  path: 'resenas', component:ResenasComponent,children:[
    
]
},
{
  path: 'idiomas', component:IdiomasComponent,children:[
    {path: 'nuevo', component: IdiomasCreaeditaComponent }
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
