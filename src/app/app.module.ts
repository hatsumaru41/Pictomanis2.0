import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdiomasComponent } from './page/idiomas/idiomas.component';
import { ResenasComponent } from './page/resenas/resenas.component';
import { ResenasListarComponent } from './page/resenas/resenas-listar/resenas-listar.component';
import { IdiomasListarComponent } from './page/idiomas/idiomas-listar/idiomas-listar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { IdiomasCreaeditaComponent } from './page/idiomas/idiomas-creaedita/idiomas-creaedita.component'

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import{MatIconModule} from'@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CategoriasComponent } from './page/categorias/categorias.component';
import { MembershipComponent } from './page/membership/membership.component';
import { RolComponent } from './page/rol/rol.component';
@NgModule({
  declarations: [
    AppComponent,
    IdiomasComponent,
    ResenasComponent,
    ResenasListarComponent,
    IdiomasListarComponent,
    IdiomasCreaeditaComponent,
    CategoriasComponent,
    MembershipComponent,
    RolComponent
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
