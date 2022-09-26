import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {Membership} from 'src/app/model/membership';
import { MembershipService } from 'src/app/service/membership.service';

@Component({
  selector: 'app-membership-listar',
  templateUrl: './membership-listar.component.html',
  styleUrls: ['./membership-listar.component.css']
})
export class MembershipListarComponent implements OnInit {
  dataSource: MatTableDataSource<Membership> = new MatTableDataSource();
  displayedColumns:string[]=['id','miembro','type'];
  constructor(private Vs:MembershipService) { }

  ngOnInit(): void {
    this.Vs.listar().subscribe(d =>{
      this.dataSource = new MatTableDataSource(d);
    })
  }

}
