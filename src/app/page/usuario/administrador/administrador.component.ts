import { rolService } from './../../../service/rol.service';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioService } from 'src/app/service/usuario.service';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/model/usuario';
import { Rol } from 'src/app/model/rol';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  dataSource: MatTableDataSource<usuario> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'lastname', 'number', 'email','rol',]
  listaRol: Rol[] = [];
  idRolSeleccionado: number = 0;
  private idMayor: number = 0;
  constructor(private us: UsuarioService, private dialog: MatDialog, private rolService: rolService) { }

  ngOnInit(): void {
    this.us.Admin().subscribe((data)=>{this.dataSource=new MatTableDataSource<usuario>(data)})
  }
}
