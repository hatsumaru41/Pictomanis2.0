import { Component, OnInit } from '@angular/core';
import { IdiomasService } from 'src/app/service/idiomas.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Idiomas } from 'src/app/model/idiomas';

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

  constructor(private idiomasService: IdiomasService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.idiomas.idiomas.length > 0) {
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
      })
    }

  }
}
