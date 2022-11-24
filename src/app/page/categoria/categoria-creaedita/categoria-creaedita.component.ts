import { Router, ActivatedRoute, Params } from '@angular/router';
import { CategoriaService } from './../../../service/categoria.service';
import { Categoria } from './../../../model/categoria';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-categoria-creaedita',
  templateUrl: './categoria-creaedita.component.html',
  styleUrls: ['./categoria-creaedita.component.css']
})
export class CategoriaCreaeditaComponent implements OnInit {
  Categoria: Categoria = new Categoria();
  mensaje: string = "Complete los campos asignados";
  edicion: boolean = false;
  id: number = 0;
  constructor(private categoriaService: CategoriaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }

  aceptar(): void {
    if (this.Categoria.nameCategoria.length > 0 ) {
      if (this.edicion) {
        this.categoriaService.modificar(this.Categoria).subscribe(data => {
          this.categoriaService.listar().subscribe(data => {
            this.categoriaService.setLista(data);
          })
        })
      } else {

        this.categoriaService.insertar(this.Categoria).subscribe(data => {
          this.categoriaService.listar().subscribe(data => {
            this.categoriaService.setLista(data);
          })
        })
      }
      this.router.navigate(['categoria']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
  init(){
    if(this.edicion){
      this.categoriaService.listarId(this.id).subscribe(data=>{
        this.Categoria = data;
      })
    }
  }
}
