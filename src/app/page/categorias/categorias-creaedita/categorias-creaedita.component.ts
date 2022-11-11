import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/service/categoria.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Categorias } from 'src/app/model/categoria';
@Component({
  selector: 'app-categorias-creaedita',
  templateUrl: './categorias-creaedita.component.html',
  styleUrls: ['./categorias-creaedita.component.css']
})
export class CategoriasCreaeditaComponent implements OnInit {
  categoria: Categorias = new Categorias();
  mensaje: string = " ";
  edicion: boolean = false;
  id: number = 0;
  constructor(private categoriasService: CategoriasService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.categoria.nameCategoria.length > 0) {
      if (this.edicion) {
        this.categoriasService.modificar(this.categoria).subscribe(data => {
          this.categoriasService.listar().subscribe(data => {
            this.categoriasService.setLista(data);
          })
        })
      } else {

        this.categoriasService.insertar(this.categoria).subscribe(data => {
          this.categoriasService.listar().subscribe(data => {
            this.categoriasService.setLista(data);
          })
        })
      }
      this.router.navigate(['idiomas']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
  init(){
    if(this.edicion){
      this.categoriasService.listarId(this.id).subscribe(data=>{
        this.categoria = data;
      })
    }
  }

}
