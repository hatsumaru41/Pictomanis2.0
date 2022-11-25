import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Membership } from 'src/app/model/membership';
import { Rol } from 'src/app/model/rol';
import { usuario } from 'src/app/model/usuario';
import { MembershipService } from 'src/app/service/membership.service';
import { rolService } from 'src/app/service/rol.service';
import { UsuarioService } from 'src/app/service/usuario.service';
@Component({
  selector: 'app-usuario-creaedita',
  templateUrl: './usuario-creaedita.component.html',
  styleUrls: ['./usuario-creaedita.component.css']
})
export class UsuarioCreaeditaComponent implements OnInit {
  Usuario: usuario = new usuario();
  mensaje: string = " ";
  edicion: boolean = false;
  id: number = 0;
  listaRol : Rol[] = [];
  idRolSeleccionado : number = 0;
  listaMembership : Membership[] = [];
  idMembershipSeleccionado : number = 0;
  constructor(private UsuarioService: UsuarioService, private router: Router, private route: ActivatedRoute, private rolService : rolService, private MembershipService : MembershipService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.rolService.listar().subscribe(data => {this.listaRol = data }) ;
    this.MembershipService.listar().subscribe(data => {this.listaMembership = data }) ;
  }

  aceptar(): void {
    if (this.Usuario.nameUsuario.length > 0 && this.Usuario.emailUsuario.length > 0 && this.idRolSeleccionado > 0 && this.idMembershipSeleccionado > 0) {
      let d = new Rol() ; 
      let e = new Membership() ;

      d.idRol = this.idRolSeleccionado ;
      this.Usuario.rol = d ; 

      e.idMembership = this.idMembershipSeleccionado ;
      this.Usuario.membership = e ; 
      
      if (this.edicion) {
        this.UsuarioService.modificar(this.Usuario).subscribe(data => {
          this.UsuarioService.listar().subscribe(data => {
            this.UsuarioService.setLista(data);
          })
        })
      } else {

        this.UsuarioService.insertar(this.Usuario).subscribe(data => {
          this.UsuarioService.listar().subscribe(data => {
            this.UsuarioService.setLista(data);
          })
        })
      }
      this.router.navigate(['usuario']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }


  init() {
    if (this.edicion) {
      this.UsuarioService.listarId(this.id).subscribe(data => {
        this.Usuario = data;
        console.log(data) ; 
        this.idRolSeleccionado = data.rol.idRol ;
        this.idMembershipSeleccionado = data.membership.idMembership ;
      })
    }

  }
}
