import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from'@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

import { CategoriaComponent } from './page/categoria/categoria.component';
import { CategoriaCreaeditaComponent } from './page/categoria/categoria-creaedita/categoria-creaedita.component';
import { CategoriaListarComponent } from './page/categoria/categoria-listar/categoria-listar.component';
import { CategoriaBuscarComponent } from './page/categoria/categoria-buscar/categoria-buscar.component';
import { CategoriaDialogoComponent } from './page/categoria/categoria-listar/categoria-dialogo/categoria-dialogo.component';

import { IdiomasComponent } from './page/idiomas/idiomas.component';
import { IdiomasListarComponent } from './page/idiomas/idiomas-listar/idiomas-listar.component';
import { IdiomasCreaeditaComponent } from './page/idiomas/idiomas-creaedita/idiomas-creaedita.component';
import { IdiomasBuscarComponent } from './page/idiomas/idiomas-buscar/idiomas-buscar.component';

import { ResenasComponent } from './page/resenas/resenas.component';
import { ResenasListarComponent } from './page/resenas/resenas-listar/resenas-listar.component';
import { ResenasCreaeditaComponent } from './page/resenas/resenas-creaedita/resenas-creaedita.component';
import { ResenasBuscarComponent } from './page/resenas/resenas-buscar/resenas-buscar.component';
import { resenasDialogoComponent } from './page/resenas/resenas-dialogo/resenas-dialogo.component';

import { MembershipComponent } from './page/membership/membership.component';
import { MembershipListarComponent } from './page/membership/membership-listar/membership-listar.component';
import { MembershipCreaeditaComponent } from './page/membership/membership-creaedita/membership-creaedita.component';
import { MembershipDialogoComponent } from './page/membership/membership-listar/membership-dialogo/membership-dialogo.component';

import { RolComponent } from './page/rol/rol.component';
import { RolListarComponent } from './page/rol/rol-listar/rol-listar.component';
import { RolCreaeditaComponent } from './page/rol/rol-creaedita/rol-creaedita.component';
import { rolBuscarComponent } from './page/rol/rol-buscar/rol-buscar.component';

import { UsuarioCreaeditaComponent } from './page/usuario/usuario-creaedita/usuario-creaedita.component';
import { UsuarioComponent } from './page/usuario/usuario.component';
import { UsuarioListarComponent } from './page/usuario/usuario-listar/usuario-listar.component';
import { UsuarioDialogoComponent } from './page/usuario/usuario-listar/usuario-dialogo/usuario-dialogo.component';
import { UsuarioBuscarComponent } from './page/usuario/usuario-buscar/usuario-buscar.component';


import { PictogramasComponent } from './page/pictogramas/pictogramas.component';
import { PictogramasCreaeditaComponent } from './page/pictogramas/pictogramas-creaedita/pictogramas-creaedita.component';
import { PictogramasListarComponent } from './page/pictogramas/pictogramas-listar/pictogramas-listar.component';
import { PictogramasBuscarComponent } from './page/pictogramas/pictogramas-buscar/pictogramas-buscar.component';
import { PictogramaDialogoComponent } from './page/pictogramas/pictograma-dialogo/pictograma-dialogo.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    CategoriaListarComponent,
    CategoriaCreaeditaComponent,
    CategoriaBuscarComponent,
    CategoriaDialogoComponent,
    IdiomasComponent,
    IdiomasListarComponent,
    IdiomasCreaeditaComponent,
    IdiomasBuscarComponent,
    ResenasComponent,
    ResenasListarComponent,
    ResenasCreaeditaComponent,
    ResenasBuscarComponent,
    resenasDialogoComponent,
    MembershipComponent,
    MembershipListarComponent,
    MembershipCreaeditaComponent,
    RolComponent,
    RolCreaeditaComponent,
    RolListarComponent,
    UsuarioComponent,
    UsuarioListarComponent,
    UsuarioCreaeditaComponent,
    MembershipDialogoComponent,
    UsuarioDialogoComponent,
    PictogramasComponent,
    PictogramasCreaeditaComponent,
    PictogramasListarComponent,
    PictogramasBuscarComponent,
    PictogramaDialogoComponent,
    UsuarioBuscarComponent,
    rolBuscarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    RouterTestingModule,
    MatDialogModule,
    MatSelectModule,
    RouterModule.forRoot([
      {path: 'categoria-listar', component: CategoriaListarComponent},
      {path: 'idiomas-listar', component: IdiomasListarComponent},
      {path: 'membership-listar', component: MembershipListarComponent},
      {path: 'pictogramas-listar', component: PictogramasListarComponent},
      {path: 'resenas-listar', component: ResenasListarComponent},
      {path: 'rol-listar', component: RolListarComponent},
      {path: 'usuario-listar', component: UsuarioDialogoComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
