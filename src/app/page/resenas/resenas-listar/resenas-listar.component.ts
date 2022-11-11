import { Component, OnInit } from '@angular/core';
import { ResenasService } from 'src/app/service/resenas.service';
import {MatTableDataSource} from '@angular/material/table'
import { Resenas } from 'src/app/model/resenas';
import { Pictograma } from 'src/app/model/pictograma';
import { MatDialog } from '@angular/material/dialog';
import { PictogramaService } from 'src/app/service/pictogramas.service';
import { ResenasDialogoComponent } from '../resenas-dialogo/resenas-dialogo.component';
@Component({
  selector: 'app-resenas-listar',
  templateUrl: './resenas-listar.component.html',
  styleUrls: ['./resenas-listar.component.css']
})
export class ResenasListarComponent implements OnInit {
dataSource:MatTableDataSource<Resenas>=new MatTableDataSource();
displayedColumns:string[]=['id','nameResenas','descripcionResenas'];  
listaPictograma: Pictograma[] = []; 
idPictogramaSeleccionado: number = 0;
  private idMayor: number = 0;
  constructor(private ps:ResenasService,private dialog:MatDialog, private pictogramaService:PictogramaService) { }

  ngOnInit(): void {
    this.ps.listar().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    });
    this.ps.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.ps.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
    this.pictogramaService.listar().subscribe(data => { this.listaPictograma = data });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(ResenasDialogoComponent);
  }

  eliminar(id: number) {
    this.ps.eliminar(id).subscribe(() => {
      this.ps.listar().subscribe(data => {
        this.ps.setLista(data);
      });
    });

  }
}
