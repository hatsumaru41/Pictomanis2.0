import { UsuarioService } from './../../../service/usuario.service';
import { Component, OnInit } from '@angular/core';
import { PictogramaService } from 'src/app/service/pictogramas.service';
import { MatTableDataSource } from '@angular/material/table';
import { Pictograma } from 'src/app/model/pictograma';
import { MatDialog } from '@angular/material/dialog';
import { CategoriaService } from 'src/app/service/categoria.service';
import { Categoria } from 'src/app/model/categoria';
import { usuario } from 'src/app/model/usuario';
import { PictogramasDialogoComponent } from './pictogramas-dialogo/pictogramas-dialogo.component';

@Component({
  selector: 'app-pictogramas-listar',
  templateUrl: './pictogramas-listar.component.html',
  styleUrls: ['./pictogramas-listar.component.css']
})
export class PictogramasListarComponent implements OnInit {
  dataSource: MatTableDataSource<Pictograma> = new MatTableDataSource();
  displayedColumns:string[]=['idPictograma','namePictograma','categoria','usuario','accion1','accion2'];
  listaCategoria: Categoria[] = [];
  listaUsuario: usuario[] = [];
  idCategoriaSeleccionado: number = 0;
  idUsuarioSeleccionado: number = 0;
  private idMayor : number = 0 ;
  constructor(private ps:PictogramaService , private dialog:MatDialog, private CategoriaService:CategoriaService, private UsuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.ps.listar().subscribe(data => {
      this.dataSource=new MatTableDataSource(data);
    })
    this.ps.getLista().subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
    });
    this.ps.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
    this.CategoriaService.listar().subscribe(data => { this.listaCategoria = data });
    this.UsuarioService.listar().subscribe(data => { this.listaUsuario = data });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(PictogramasDialogoComponent);
  }


  eliminar(id: number) {
    this.ps.eliminar(id).subscribe(() => {
      this.ps.listar().subscribe(data => {
        this.ps.setLista(data);
      });
    });

  }
}
