import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Membership } from 'src/app/model/membership';
import { MembershipService } from 'src/app/service/membership.service';
import { MembershipDialogoComponent } from './membership-dialogo/membership-dialogo.component';

@Component({
  selector: 'app-membership-listar',
  templateUrl: './membership-listar.component.html',
  styleUrls: ['./membership-listar.component.css']
})
export class MembershipListarComponent implements OnInit {
  dataSource: MatTableDataSource<Membership> = new MatTableDataSource();
  displayedColumns:string[]=['id','miembro','type'];
  private idMayor: number = 0;
  constructor(private Vs:MembershipService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.Vs.listar().subscribe(d =>{
      this.dataSource = new MatTableDataSource(d);
    })
    this.Vs.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.Vs.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
    
  }
  confirmar(id: number){
    this.idMayor = id;
    this.dialog.open(MembershipDialogoComponent);
  }

  eliminar(id:number){
    this.Vs.eliminar(id).subscribe(()=>{
      this.Vs.listar().subscribe(data=>{
        this.Vs.setLista(data);
      })
    })
  }

}
