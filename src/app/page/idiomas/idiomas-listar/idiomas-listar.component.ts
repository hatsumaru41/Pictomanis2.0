import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Idiomas } from 'src/app/model/idiomas';
import { IdiomasService } from 'src/app/service/idiomas.service';

@Component({
  selector: 'app-idiomas-listar',
  templateUrl: './idiomas-listar.component.html',
  styleUrls: ['./idiomas-listar.component.css']
})
export class IdiomasListarComponent implements OnInit {
  dataSource: MatTableDataSource<Idiomas> = new MatTableDataSource();
  displayedColumns:string[]= ['id','idiomas']
  constructor(private Vs:IdiomasService) { }

  ngOnInit(): void {
    this.Vs.listar().subscribe(d =>{
      this.dataSource = new MatTableDataSource(d);
    })
  }

}
