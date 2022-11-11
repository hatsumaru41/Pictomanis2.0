import { Component, OnInit } from '@angular/core';
import { Resenas } from 'src/app/model/resenas';
import { ResenasService } from 'src/app/service/resenas.service';

@Component({
  selector: 'app-resenas-buscar',
  templateUrl: './resenas-buscar.component.html',
  styleUrls: ['./resenas-buscar.component.css']
})
export class ResenasBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private resenasService: ResenasService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Resenas[] = [];
    this.resenasService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nameResenas.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.resenasService.setLista(array);
    })
  }
}
