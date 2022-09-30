import { Component, OnInit } from '@angular/core';
import { IdiomasService } from 'src/app/service/idiomas.service';
import { IdiomasListarComponent } from '../idiomas-listar.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-idiomas-dialogo',
  templateUrl: './idiomas-dialogo.component.html',
  styleUrls: ['./idiomas-dialogo.component.css']
})
export class IdiomasDialogoComponent implements OnInit {

  constructor(private idiomaservice : IdiomasService,
    private dialogRef: MatDialogRef<IdiomasDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.idiomaservice.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
