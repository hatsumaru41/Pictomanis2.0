import { Component, OnInit } from '@angular/core';
import { IdiomasService } from 'src/app/service/idiomas.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Idiomas } from 'src/app/model/idiomas';
import { Resenas } from 'src/app/model/resenas';
import { ResenasService } from 'src/app/service/resenas.service';

@Component({
  selector: 'app-idiomas-creaedita',
  templateUrl: './idiomas-creaedita.component.html',
  styleUrls: ['./idiomas-creaedita.component.css']
})
export class IdiomasCreaeditaComponent implements OnInit {
  idiomas: Idiomas = new Idiomas();
  mensaje: string = " Complete los campos asignados";
  edicion: boolean = false;
  id: number = 0;
  listaResenas: Resenas[] = [];
  idResenasSeleccionado: number = 0;
  constructor(private idiomasService: IdiomasService, private router: Router,private route: ActivatedRoute, private resenasService: ResenasService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.resenasService.listar().subscribe(data => { this.listaResenas = data });
  }

  aceptar(): void {
    if (this.idiomas.nameIdiomas.length > 0 && this.idResenasSeleccionado > 0) {
      let d = new Resenas();
      d.idResenas = this.idResenasSeleccionado;
      this.idiomas.resenas = d;
      if (this.edicion) {
        this.idiomasService.modificar(this.idiomas).subscribe(data => {
          this.idiomasService.listar().subscribe(data => {
            this.idiomasService.setLista(data);
          })
        })
      } else {

        this.idiomasService.insertar(this.idiomas).subscribe(data => {
          this.idiomasService.listar().subscribe(data => {
            this.idiomasService.setLista(data);
          })
        })
      }
      this.router.navigate(['idiomas']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
  init() {
    if (this.edicion) {
      this.idiomasService.listarId(this.id).subscribe(data => {
        this.idiomas = data;
        console.log(data);
        this.idResenasSeleccionado = data.resenas.idResenas;
      })
    }

  }
}
