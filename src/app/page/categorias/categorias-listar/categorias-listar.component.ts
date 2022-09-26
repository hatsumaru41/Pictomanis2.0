import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Categorias } from 'src/app/model/categorias';
import { CategoriasService } from 'src/app/service/categorias.service';

@Component({
  selector: 'app-categorias-listar',
  templateUrl: './categorias-listar.component.html',
  styleUrls: ['./categorias-listar.component.css']
})
export class CategoriasListarComponent implements OnInit {
  dataSource: MatTableDataSource<Categorias> = new MatTableDataSource();
  displayedColumns:string[]= ['id','categorias']
  constructor(private Vs:CategoriasService) { }

  ngOnInit(): void {
    this.Vs.listar().subscribe(d =>{
      this.dataSource = new MatTableDataSource(d);
    })
  }

}
