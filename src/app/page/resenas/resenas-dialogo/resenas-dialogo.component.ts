import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ResenasService } from 'src/app/service/resenas.service';

@Component({
  selector: 'app-resenas-dialogo',
  templateUrl: './resenas-dialogo.component.html',
  styleUrls: ['./resenas-dialogo.component.css']
})
export class ResenasDialogoComponent implements OnInit {

  constructor(private resenasService : ResenasService,
    private dialogRef: MatDialogRef<ResenasDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.resenasService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
