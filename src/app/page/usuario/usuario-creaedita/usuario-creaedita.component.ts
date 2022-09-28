import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-creaedita',
  templateUrl: './usuario-creaedita.component.html',
  styleUrls: ['./usuario-creaedita.component.css']
})
export class UsuarioCreaeditaComponent implements OnInit {
  Usuario: usuario = new usuario();
  mensaje: string = " ";

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }
  aceptar(): void {
    if (this.Usuario.name.length > 0) {

      this.usuarioService.insertar(this.Usuario).subscribe(data => {
        this.usuarioService.listar().subscribe(data => {
          this.usuarioService.setLista(data);
        })
      })
      this.router.navigate(['usuario']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

}
