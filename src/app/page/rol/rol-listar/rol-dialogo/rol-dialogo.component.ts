import { rolService } from 'src/app/service/rol.service';
import { Component, OnInit } from '@angular/core';
import{MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-rol-dialogo',
  templateUrl: './rol-dialogo.component.html',
  styleUrls: ['./rol-dialogo.component.css']
})
export class RolDialogoComponent implements OnInit {

  constructor(private RolService: rolService,
    private dialogRef: MatDialogRef<RolDialogoComponent>) { }

  ngOnInit(): void {}
  confirmar(estado: boolean) {
    this.RolService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
