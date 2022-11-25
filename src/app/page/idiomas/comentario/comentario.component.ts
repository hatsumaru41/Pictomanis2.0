import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Idiomas } from 'src/app/model/idiomas';
import { Resenas } from 'src/app/model/resenas';
import { IdiomasService } from 'src/app/service/idiomas.service';
import { ResenasService } from 'src/app/service/resenas.service';
import { IdiomasDialogoComponent } from '../idiomas-listar/idiomas-dialogo/idiomas-dialogo.component';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {

  dataSource: MatTableDataSource<Idiomas> = new MatTableDataSource();
  displayedColumns:string[]= ['id','idiomas','resenas']
  listaResenas: Resenas[] = [];
  idResenasSeleccionado: number = 0;
  private idMayor: number = 0;
  constructor(private Vs:IdiomasService,private dialog:MatDialog, private resenasService:ResenasService) { }

  ngOnInit(): void {
    this.Vs.comentario().subscribe((data)=>{this.dataSource= new MatTableDataSource<Idiomas>(data)})
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
