  
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Resenas } from 'src/app/model/resenas';
import { ResenasService } from 'src/app/service/resenas.service';
import { Pictograma } from 'src/app/model/pictograma';
import { PictogramaService } from 'src/app/service/pictogramas.service';

@Component({
  selector: 'app-resenas-creaedita',
  templateUrl: './resenas-creaedita.component.html',
  styleUrls: ['./resenas-creaedita.component.css']
})
export class ResenasCreaeditaComponent implements OnInit {
  resenas: Resenas = new Resenas();
  mensaje: string = " Complete los campos asignados";
  edicion: boolean = false;
  id: number = 0;
  listaPictograma: Pictograma[] = [];
  idPictogramaSeleccionado: number = 0;
  constructor(private resenasService: ResenasService, private router: Router,private route: ActivatedRoute , private PictogramaService : PictogramaService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.PictogramaService.listar().subscribe(data => {this.listaPictograma = data }) ;
  }

  aceptar(): void {
    if (this.resenas.nameResenas.length > 0 && this.idPictogramaSeleccionado > 0) {
      let d = new Pictograma() ; 
      d.idPictograma = this.idPictogramaSeleccionado ;
      this.resenas.pictograma = d ; 
      if (this.edicion) {
        this.resenasService.modificar(this.resenas).subscribe(data => {
          this.resenasService.listar().subscribe(data => {
            this.resenasService.setLista(data);
          })
        })
      } else {

        this.resenasService.insertar(this.resenas).subscribe(data => {
          this.resenasService.listar().subscribe(data => {
            this.resenasService.setLista(data);
          })
        })
      }
      this.router.navigate(['resenas']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
  init() {
    if (this.edicion) {
      this.resenasService.listarId(this.id).subscribe(data => {
        this.resenas = data;
        console.log(data) ; 
        this.idPictogramaSeleccionado = data.pictograma.idPictograma ;
      })
    }

  }
}