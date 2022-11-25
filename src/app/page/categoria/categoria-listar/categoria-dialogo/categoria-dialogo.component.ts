import { MatDialogRef } from '@angular/material/dialog';
import { CategoriaService } from './../../../../service/categoria.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-dialogo',
  templateUrl: './categoria-dialogo.component.html',
  styleUrls: ['./categoria-dialogo.component.css']
})
export class CategoriaDialogoComponent implements OnInit {

  constructor(private CategoriaService: CategoriaService, 
    private dialogRef: MatDialogRef<CategoriaDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean){
    this.CategoriaService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
