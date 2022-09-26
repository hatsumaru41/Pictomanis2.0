import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdiomasCreaeditaComponent } from './page/idiomas/idiomas-creaedita/idiomas-creaedita.component';
import { IdiomasComponent } from './page/idiomas/idiomas.component';
import { ResenasComponent } from './page/resenas/resenas.component';
import { ResenasCreaeditaComponent } from './page/resenas/resenas-creaedita/resenas-creaedita.component';
import { ResenasService } from './service/resenas.service';
import { CategoriasComponent } from './page/categorias/categorias.component';
import { CategoriasCreaeditaComponent } from './page/categorias/categorias-creaedita/categorias-creaedita.component';
import { MembershipComponent } from './page/membership/membership.component';
import { MembershipCreaeditaComponent } from './page/membership/membership-creaedita/membership-creaedita.component';
import { RolComponent } from './page/rol/rol.component';
import { RolCreaeditaComponent } from './page/rol/rol-creaedita/rol-creaedita.component';
import { UsuarioComponent } from './page/usuario/usuario.component';
import { UsuarioCreaeditaComponent } from './page/usuario/usuario-creaedita/usuario-creaedita.component';

const routes: Routes = [
  {
  path: 'resenas', component:ResenasComponent,children:[
    {path: 'nuevo', component: ResenasCreaeditaComponent}
    
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
},
{
  path: 'membership', component:MembershipComponent,children:[
    {path: 'nuevo', component: MembershipCreaeditaComponent}
  ]
},
{
  path: 'rol', component:RolComponent,children:[
    {path: 'nuevo', component: RolCreaeditaComponent}
  ]
},
{
  path: 'usuario', component: UsuarioComponent,children:[
    {path: 'nuevo', component: UsuarioCreaeditaComponent}
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
