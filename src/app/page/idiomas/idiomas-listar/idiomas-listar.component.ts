import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Idiomas } from 'src/app/model/idiomas';
import { IdiomasService } from 'src/app/service/idiomas.service';
import { IdiomasDialogoComponent } from './idiomas-dialogo/idiomas-dialogo.component';

@Component({
  selector: 'app-idiomas-listar',
  templateUrl: './idiomas-listar.component.html',
  styleUrls: ['./idiomas-listar.component.css']
})
export class IdiomasListarComponent implements OnInit {
  dataSource: MatTableDataSource<Idiomas> = new MatTableDataSource();
  displayedColumns:string[]= ['id','idiomas','accion1','accion2']
  private idMayor: number = 0;
  constructor(private Vs:IdiomasService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.Vs.listar().subscribe(d =>{
      this.dataSource = new MatTableDataSource(d);
    });
    this.Vs.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.Vs.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
    
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(IdiomasDialogoComponent);
  }

  eliminar(id: number) {
    this.Vs.eliminar(id).subscribe(() => {
      this.Vs.listar().subscribe(data => {
        this.Vs.setLista(data);
      });
    });

  }
}
