import { Component, OnInit } from '@angular/core';
import { Categorias } from 'src/app/model/categorias';
import { CategoriasService } from 'src/app/service/categorias.service';

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
        if (element.categorias.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.CategoriasService.setLista(array);
    })
  }
}
