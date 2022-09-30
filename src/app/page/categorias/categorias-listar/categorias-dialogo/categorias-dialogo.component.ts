import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CategoriasService } from 'src/app/service/categorias.service';

@Component({
  selector: 'app-categorias-dialogo',
  templateUrl: './categorias-dialogo.component.html',
  styleUrls: ['./categorias-dialogo.component.css']
})
export class CategoriasDialogoComponent implements OnInit {

  constructor(private CategoriasService: CategoriasService, private dialogRef: MatDialogRef<CategoriasDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean){
    this.CategoriasService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
