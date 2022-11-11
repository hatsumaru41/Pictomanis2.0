import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ResenasService } from 'src/app/service/resenas.service';

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
