import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/service/categorias.service';
import { Router } from '@angular/router';
import { Categorias } from 'src/app/model/categorias';
@Component({
  selector: 'app-categorias-creaedita',
  templateUrl: './categorias-creaedita.component.html',
  styleUrls: ['./categorias-creaedita.component.css']
})
export class CategoriasCreaeditaComponent implements OnInit {
  Categorias: Categorias = new Categorias();
  constructor(private categoriasService: CategoriasService, private router: Router) { }

  ngOnInit(): void {
  }
  aceptar(): void {
    if (this.Categorias.categorias.length > 0) {

      this.categoriasService.insertar(this.Categorias).subscribe(data => {
        this.categoriasService.listar().subscribe(data => {
          this.categoriasService.setLista(data);
        })
      })
      this.router.navigate(['Categorias']);
    }
  }

}
