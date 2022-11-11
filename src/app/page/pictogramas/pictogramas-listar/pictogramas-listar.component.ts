import { usuario } from './../../../model/usuario';
import { Component, OnInit } from '@angular/core';
import { PictogramaService } from 'src/app/service/pictogramas.service';
import { MatTableDataSource } from '@angular/material/table';
import { Pictograma } from 'src/app/model/pictograma';
import { MatDialog } from '@angular/material/dialog';
import { PictogramaDialogoComponent } from '../pictograma-dialogo/pictograma-dialogo.component';

@Component({
  selector: 'app-pictogramas-listar',
  templateUrl: './pictogramas-listar.component.html',
  styleUrls: ['./pictogramas-listar.component.css']
})
export class PictogramasListarComponent implements OnInit {
  dataSource: MatTableDataSource<Pictograma> = new MatTableDataSource();
  displayedColumns:string[]=['idPictograma','namePictograma','id_usuario','accion1','accion2'];
  listaUsuario: usuario[] = [];
  idUsuarioSeleccionado: number = 0;
  private idMayor : number = 0 ;
  constructor(private ps:PictogramaService , private dialog:MatDialog) { }

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
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(PictogramaDialogoComponent);
  }


  eliminar(id: number) {
    this.ps.eliminar(id).subscribe(() => {
      this.ps.listar().subscribe(data => {
        this.ps.setLista(data);
      });
    });

  }
}
