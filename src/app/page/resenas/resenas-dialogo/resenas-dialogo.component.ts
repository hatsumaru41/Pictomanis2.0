import { ResenasService } from './../../../service/resenas.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-resenas-dialogo',
  templateUrl: './resenas-dialogo.component.html',
  styleUrls: ['./resenas-dialogo.component.css']
})
export class resenasDialogoComponent implements OnInit {

  constructor(private ResenasService:ResenasService,private dialogRef:MatDialogRef<resenasDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado:boolean){
    this.ResenasService.setConfirmaEliminacion(estado);
    this.dialogRef.close() ; 

}

}
