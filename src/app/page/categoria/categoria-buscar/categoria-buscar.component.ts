import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/model/categoria';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-categoria-buscar',
  templateUrl: './categoria-buscar.component.html',
  styleUrls: ['./categoria-buscar.component.css']
})
export class CategoriaBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
  }
  buscar(e: any){
    let array: Categoria[] = [];
    this.categoriaService.listar().subscribe(data =>{
      data.forEach((element, index) =>{
        if (element.nameCategoria.includes(e.target.value)){
          array.push(data[index]);
        }
      });
      this.categoriaService.setLista(array);
    })
  }
}
