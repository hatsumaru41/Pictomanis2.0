import { MatDialogRef } from '@angular/material/dialog';
import { PictogramaService } from './../../../../service/pictogramas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pictogramas-dialogo',
  templateUrl: './pictogramas-dialogo.component.html',
  styleUrls: ['./pictogramas-dialogo.component.css']
})
export class PictogramasDialogoComponent implements OnInit {

  constructor(private PictogramaService: PictogramaService, 
    private dialogRef: MatDialogRef<PictogramasDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean){
    this.PictogramaService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
