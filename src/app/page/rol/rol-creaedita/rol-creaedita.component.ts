import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Rol } from 'src/app/model/rol';
import { rolService } from 'src/app/service/rol.service';
@Component({
  selector: 'app-rol-creaedita',
  templateUrl: './rol-creaedita.component.html',
  styleUrls: ['./rol-creaedita.component.css']
})
export class RolCreaeditaComponent implements OnInit {
  rol: Rol = new Rol();
  mensaje: string = " ";
  edicion: boolean = false;
  id: number = 0;


  constructor(private RolService: rolService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }


  aceptar(): void {
    if (this.rol.nameRol.length > 0) {
      if (this.edicion) {
        this.RolService.modificar(this.rol).subscribe(data => {
          this.RolService.listar().subscribe(data => {
            this.RolService.setLista(data);
          })
        })
      } else {

        this.RolService.insertar(this.rol).subscribe(data => {
          this.RolService.listar().subscribe(data => {
            this.RolService.setLista(data);
          })
        })
      }
      this.router.navigate(['rol']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }


  init() {
    if (this.edicion) {
      this.RolService.listarId(this.id).subscribe(data => {
        this.rol = data;
      })
    }

  }
}
