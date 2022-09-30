import { Component, OnInit } from '@angular/core';
import { PictogramaService } from 'src/app/service/pictogramas.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pictograma-dialogo',
  templateUrl: './pictograma-dialogo.component.html',
  styleUrls: ['./pictograma-dialogo.component.css']
})
export class PictogramaDialogoComponent implements OnInit {

  constructor(private PictogramaService:PictogramaService,private dialogRef:MatDialogRef<PictogramaDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado:boolean){
    this.PictogramaService.setConfirmaEliminacion(estado);
    this.dialogRef.close() ; 

}

}
