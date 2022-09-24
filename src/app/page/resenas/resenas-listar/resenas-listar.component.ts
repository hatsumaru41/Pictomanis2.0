import { Component, OnInit } from '@angular/core';
import { ResenasService } from 'src/app/service/resenas.service';
import {MatTableDataSource} from '@angular/material/table'
import { Resenas } from 'src/app/model/reseñas';
@Component({
  selector: 'app-resenas-listar',
  templateUrl: './resenas-listar.component.html',
  styleUrls: ['./resenas-listar.component.css']
})
export class ResenasListarComponent implements OnInit {
dataSource:MatTableDataSource<Resenas>=new MatTableDataSource();
displayedColumns:string[]=['id','nameResenas','descripcionResenas'];  
constructor(private ps:ResenasService) { }

  ngOnInit(): void {
    this.ps.listar().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
