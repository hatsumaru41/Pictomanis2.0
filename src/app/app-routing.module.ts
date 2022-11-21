import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdiomasCreaeditaComponent } from './page/idiomas/idiomas-creaedita/idiomas-creaedita.component';
import { IdiomasComponent } from './page/idiomas/idiomas.component';
import { ResenasComponent } from './page/resenas/resenas.component';
import { ResenasCreaeditaComponent } from './page/resenas/resenas-creaedita/resenas-creaedita.component';
import { ResenasService } from './service/resenas.service';
import { MembershipComponent } from './page/membership/membership.component';
import { MembershipCreaeditaComponent } from './page/membership/membership-creaedita/membership-creaedita.component';
import { RolComponent } from './page/rol/rol.component';
import { RolCreaeditaComponent } from './page/rol/rol-creaedita/rol-creaedita.component';
import { UsuarioComponent } from './page/usuario/usuario.component';
import { UsuarioCreaeditaComponent } from './page/usuario/usuario-creaedita/usuario-creaedita.component';
import { PictogramasCreaeditaComponent } from './page/pictogramas/pictogramas-creaedita/pictogramas-creaedita.component';
import { PictogramasComponent } from './page/pictogramas/pictogramas.component';
import { CategoriaComponent } from './page/categoria/categoria.component';
import { CategoriaCreaeditaComponent } from './page/categoria/categoria-creaedita/categoria-creaedita.component';

const routes: Routes = [
  {
    path: 'resenas', component: ResenasComponent, children: [
      { path: 'insertar', component: ResenasCreaeditaComponent },
      { path: 'edicion/:id', component: ResenasCreaeditaComponent}

    ]
  },
  {
    path: 'idiomas', component: IdiomasComponent, children: [
      { path: 'insertar', component: IdiomasCreaeditaComponent },
      { path: 'edicion/:id', component: IdiomasCreaeditaComponent }
    ]
  },
  {
    path: 'categoria', component: CategoriaComponent, children: [
      { path: 'insertar', component: CategoriaCreaeditaComponent },
      { path: 'edicion/:id', component: CategoriaCreaeditaComponent}
    ]
  },
  {
    path: 'membership', component: MembershipComponent, children: [
      { path: 'insertar', component: MembershipCreaeditaComponent },
      { path: 'edicion/:id', component: MembershipCreaeditaComponent}
    ]
  },
  {
    path: 'rol', component: RolComponent, children: [
      { path: 'insertar', component: RolCreaeditaComponent },
      { path: 'edicion/:id', component: RolCreaeditaComponent }
    ]
  },
  {
    path: 'usuario', component: UsuarioComponent, children: [
      { path: 'insertar', component: UsuarioCreaeditaComponent },
      { path: 'edicion/:id', component: UsuarioCreaeditaComponent }
    ]
  },
  {
    path: 'pictogramas', component: PictogramasComponent, children: [
      { path: 'insertar', component: PictogramasCreaeditaComponent },
      { path: 'edicion/id', component: PictogramasCreaeditaComponent }
    ]

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
