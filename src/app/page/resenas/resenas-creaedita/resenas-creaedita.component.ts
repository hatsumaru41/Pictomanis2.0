import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Resenas } from 'src/app/model/resenas';
import { ResenasService } from 'src/app/service/resenas.service';

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
  listaResenas: Resenas[] = [];
  idResenasSeleccionado: number = 0;
  constructor(private resenasService: ResenasService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.resenas.nameResenas.length > 0) {
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
      })
    }

  }
}