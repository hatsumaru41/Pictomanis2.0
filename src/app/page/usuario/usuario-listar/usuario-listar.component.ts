import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioDialogoComponent } from './usuario-dialogo/usuario-dialogo.component';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.css']
})
export class UsuarioListarComponent implements OnInit {
  dataSource: MatTableDataSource<usuario> = new MatTableDataSource();
  displayedColumns: string[] =['id', 'name', 'lastname', 'number', 'email', 'password', 'accion1','accion2'];
  private idMayor: number = 0;
  constructor(private us: UsuarioService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.us.listar().subscribe(data => {
      this.dataSource=new MatTableDataSource(data);
    })
    this.us.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.us.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(UsuarioDialogoComponent);
  }

  eliminar(id: number) {
    this.us.eliminar(id).subscribe(() => {
      this.us.listar().subscribe(data => {
        this.us.setLista(data);/* se ejecuta la línea 27*/
      });
    });




  }
}
