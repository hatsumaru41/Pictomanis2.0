import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Categorias } from 'src/app/model/categorias';
import { CategoriasService } from 'src/app/service/categorias.service';
import { MatDialog } from '@angular/material/dialog';
import { CategoriasDialogoComponent } from './categorias-dialogo/categorias-dialogo.component';

@Component({
  selector: 'app-categorias-listar',
  templateUrl: './categorias-listar.component.html',
  styleUrls: ['./categorias-listar.component.css']
})
export class CategoriasListarComponent implements OnInit {
  dataSource: MatTableDataSource<Categorias> = new MatTableDataSource();
  displayedColumns:string[]= ['id','categorias'];
  private idMayor: number = 0;
  constructor(private Vs:CategoriasService, private dialog: MatDialog) { }

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
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(CategoriasDialogoComponent);
  }
  eliminar(id: number) {
    this.Vs.eliminar(id).subscribe(() => {
      this.Vs.listar().subscribe(data => {
        this.Vs.setLista(data);/* se ejecuta la línea 27*/
      });
    });
  }
}
