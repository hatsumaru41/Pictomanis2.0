import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {Membership} from 'src/app/model/membership';

@Component({
  selector: 'app-membership-listar',
  templateUrl: './membership-listar.component.html',
  styleUrls: ['./membership-listar.component.css']
})
export class MembershipListarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
