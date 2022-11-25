import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Membership } from 'src/app/model/membership';
import { usuario } from 'src/app/model/usuario';
import { MembershipService } from 'src/app/service/membership.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { UsuarioDialogoComponent } from '../usuario-listar/usuario-dialogo/usuario-dialogo.component';

@Component({
  selector: 'app-anual',
  templateUrl: './anual.component.html',
  styleUrls: ['./anual.component.css']
})
export class AnualComponent implements OnInit {

  dataSource: MatTableDataSource<usuario> = new MatTableDataSource();
  displayedColumns: string[] =['id', 'name', 'lastname', 'number', 'email','membership'];
  listaMembership : Membership[] = [];
  idMembershipSeleccionado : number = 0;
  private idMayor: number = 0;
  constructor(private us: UsuarioService, private dialog: MatDialog, private MembershipService : MembershipService) {}

  ngOnInit(): void {
   this.us.Anual().subscribe((data)=>{this.dataSource= new MatTableDataSource<usuario>(data)})
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(UsuarioDialogoComponent);
  }

  eliminar(id: number) {
    this.us.eliminar(id).subscribe(() => {
      this.us.listar().subscribe(data => {
        this.us.setLista(data);
      });
    });
  }
}
