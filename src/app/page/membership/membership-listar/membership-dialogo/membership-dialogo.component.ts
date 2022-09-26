import { Component, OnInit } from '@angular/core';
import { MembershipService } from 'src/app/service/membership.service';
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-membership-dialogo',
  templateUrl: './membership-dialogo.component.html',
  styleUrls: ['./membership-dialogo.component.css']
})
export class MembershipDialogoComponent implements OnInit {

  constructor(private membershipService: MembershipService, 
    private dialogRef: MatDialogRef<MembershipDialogoComponent>
    ) { }

  ngOnInit(): void {
  }
  
  confirmar(estado: boolean){
    this.membershipService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
