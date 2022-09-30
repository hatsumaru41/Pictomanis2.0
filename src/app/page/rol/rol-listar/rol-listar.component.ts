import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { RolDialogoComponent } from './rol-dialogo/rol-dialogo.component';
import { rol } from 'src/app/model/rol';
import { rolService } from 'src/app/service/rol.service';

@Component({
  selector: 'app-rol-listar',
  templateUrl: './rol-listar.component.html',
  styleUrls: ['./rol-listar.component.css']
})
export class RolListarComponent implements OnInit {
  dataSource: MatTableDataSource<rol> = new MatTableDataSource();
  displayedColumns: string[] =['id', 'rolName','accion1','accion2'];
  private idMayor: number = 0;
  constructor(private rs: rolService, private dialog: MatDialog) {}


  ngOnInit(): void {
    this.rs.listar().subscribe(data => {
      this.dataSource=new MatTableDataSource(data);
    })
    this.rs.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.rs.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(RolDialogoComponent);
  }

  eliminar(id: number) {
    this.rs.eliminar(id).subscribe(() => {
      this.rs.listar().subscribe(data => {
        this.rs.setLista(data);/* se ejecuta la línea 27*/
      });
    });




  }
}
