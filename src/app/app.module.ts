import { RouterTestingModule } from '@angular/router/testing';
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

import { CategoriasComponent } from './page/categorias/categorias.component';
import { CategoriasListarComponent } from './page/categorias/categorias-listar/categorias-listar.component';
import { CategoriasCreaeditaComponent } from './page/categorias/categorias-creaedita/categorias-creaedita.component';

import { IdiomasComponent } from './page/idiomas/idiomas.component';
import { IdiomasListarComponent } from './page/idiomas/idiomas-listar/idiomas-listar.component';
import { IdiomasCreaeditaComponent } from './page/idiomas/idiomas-creaedita/idiomas-creaedita.component';

import { ResenasComponent } from './page/resenas/resenas.component';
import { ResenasListarComponent } from './page/resenas/resenas-listar/resenas-listar.component';
import { ResenasCreaeditaComponent } from './page/resenas/resenas-creaedita/resenas-creaedita.component';

import { MembershipComponent } from './page/membership/membership.component';
import { MembershipListarComponent } from './page/membership/membership-listar/membership-listar.component';
import { MembershipCreaeditaComponent } from './page/membership/membership-creaedita/membership-creaedita.component';
import { MembershipDialogoComponent } from './page/membership/membership-listar/membership-dialogo/membership-dialogo.component';

import { RolComponent } from './page/rol/rol.component';
import { RolListarComponent } from './page/rol/rol-listar/rol-listar.component';
import { RolCreaeditaComponent } from './page/rol/rol-creaedita/rol-creaedita.component';

import { UsuarioCreaeditaComponent } from './page/usuario/usuario-creaedita/usuario-creaedita.component';
import { UsuarioComponent } from './page/usuario/usuario.component';
import { UsuarioListarComponent } from './page/usuario/usuario-listar/usuario-listar.component';
import { UsuarioDialogoComponent } from './page/usuario/usuario-listar/usuario-dialogo/usuario-dialogo.component';
import { PictogramasComponent } from './page/pictogramas/pictogramas.component';
import { PictogramasCreaeditaComponent } from './page/pictogramas/pictogramas-creaedita/pictogramas-creaedita.component';
import { PictogramasListarComponent } from './page/pictogramas/pictogramas-listar/pictogramas-listar.component';
import { PictogramasBuscarComponent } from './page/pictogramas/pictogramas-buscar/pictogramas-buscar.component';
import { PictogramaDialogoComponent } from './page/pictogramas/pictograma-dialogo/pictograma-dialogo.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriasComponent,
    CategoriasListarComponent,
    CategoriasCreaeditaComponent,
    IdiomasComponent,
    IdiomasListarComponent,
    IdiomasCreaeditaComponent,
    ResenasComponent,
    ResenasListarComponent,
    ResenasCreaeditaComponent,
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
    PictogramaDialogoComponent
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
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
