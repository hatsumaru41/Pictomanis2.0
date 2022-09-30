import { Component, OnInit } from '@angular/core';
import { Idiomas } from 'src/app/model/idiomas';
import { IdiomasService } from 'src/app/service/idiomas.service';

@Component({
  selector: 'app-idiomas-buscar',
  templateUrl: './idiomas-buscar.component.html',
  styleUrls: ['./idiomas-buscar.component.css']
})
export class IdiomasBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private idiomaService: IdiomasService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Idiomas[] = [];
    this.idiomaService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.idiomas.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.idiomaService.setLista(array);
    })
  }
}
