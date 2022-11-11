import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/model/categoria';
import { CategoriaDialogoComponent } from './categoria-dialogo/categoria-dialogo.component';
import { CategoriaService } from 'src/app/service/categoria.service';
import { Pictograma } from 'src/app/model/pictograma';
import { PictogramaService } from 'src/app/service/pictogramas.service';

@Component({
  selector: 'app-categoria-listar',
  templateUrl: './categoria-listar.component.html',
  styleUrls: ['./categoria-listar.component.css']
})
export class CategoriaListarComponent implements OnInit {
  dataSource: MatTableDataSource<Categoria> = new MatTableDataSource();
  displayedColumns: string[] = ['idCategoria','nameCategoria','pictograma','accion1','accion2'];
  listaPictograma: Pictograma[] = [];
  idPictogramaSeleccionado: number = 0;
  private idMayor: number = 0;
  constructor(private Vs:CategoriaService, private dialog: MatDialog, private pictogramaService:PictogramaService) { }

  ngOnInit(): void {
    this.Vs.listar().subscribe(d =>{
      this.dataSource = new MatTableDataSource(d);
    })
    this.Vs.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.Vs.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
    this.pictogramaService.listar().subscribe(data =>{
      this.listaPictograma = data
    });
  }
  confirmar(idCategoria: number) {
    this.idMayor = idCategoria;
    this.dialog.open(CategoriaDialogoComponent);
  }
  eliminar(id: number) {
    this.Vs.eliminar(id).subscribe(() => {
      this.Vs.listar().subscribe(data => {
        this.Vs.setLista(data);
      });
    });
  }

}
