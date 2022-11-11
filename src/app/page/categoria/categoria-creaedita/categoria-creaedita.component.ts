import { Router, ActivatedRoute, Params } from '@angular/router';
import { CategoriaService } from './../../../service/categoria.service';
import { Categoria } from './../../../model/categoria';
import { Component, OnInit } from '@angular/core';
import { Pictograma } from 'src/app/model/pictograma';
import { PictogramaService } from 'src/app/service/pictogramas.service';

@Component({
  selector: 'app-categoria-creaedita',
  templateUrl: './categoria-creaedita.component.html',
  styleUrls: ['./categoria-creaedita.component.css']
})
export class CategoriaCreaeditaComponent implements OnInit {
  categoria: Categoria = new Categoria();
  mensaje: string = "Complete los campos asignados";
  edicion: boolean = false;
  id: number = 0;
  listaPictograma: Pictograma[] = [];
  idPictogramaSeleccionado: number = 0;
  constructor(private categoriaService: CategoriaService, private router: Router, private route: ActivatedRoute, private pictogramaService: PictogramaService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.pictogramaService.listar().subscribe(data =>{
      this.listaPictograma = data});
  }

  aceptar(): void {
    if (this.categoria.nameCategoria.length > 0 && this.idPictogramaSeleccionado > 0) {
      let d = new Pictograma();
      d.idPictograma = this.idPictogramaSeleccionado;
      this.categoria.pictograma = d;
      if (this.edicion) {
        this.categoriaService.modificar(this.categoria).subscribe(data => {
          this.categoriaService.listar().subscribe(data => {
            this.categoriaService.setLista(data);
          })
        })
      } else {

        this.categoriaService.insertar(this.categoria).subscribe(data => {
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
        this.categoria = data;
        console.log(data);
        this.idPictogramaSeleccionado = data.pictograma.idPictograma;
      })
    }
  }
}
