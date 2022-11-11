import { Component, OnInit } from '@angular/core';
import { Categorias } from 'src/app/model/categoria';
import { CategoriasService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-categorias-buscar',
  templateUrl: './categorias-buscar.component.html',
  styleUrls: ['./categorias-buscar.component.css']
})
export class CategoriasBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private CategoriasService: CategoriasService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Categorias[] = [];
    this.CategoriasService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nameCategoria.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.CategoriasService.setLista(array);
    })
  }
}
