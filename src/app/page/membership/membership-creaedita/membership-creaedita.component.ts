import { Membership } from './../../../model/membership';
import { Component, OnInit } from '@angular/core';
import { MembershipService } from 'src/app/service/membership.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-membership-creaedita',
  templateUrl: './membership-creaedita.component.html',
  styleUrls: ['./membership-creaedita.component.css']
})
export class MembershipCreaeditaComponent implements OnInit {
  membership: Membership = new Membership();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;
  constructor(private membershipService: MembershipService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.membership.miembro.length > 0) {
      if(this.edicion){
        this.membershipService.insertar(this.membership).subscribe(data => {
          this.membershipService.listar().subscribe(data => {
            this.membershipService.setLista(data);
          })
        })
      }
      else{
        this.membershipService.insertar(this.membership).subscribe(data =>{
          this.membershipService.listar().subscribe(data =>{
            this.membershipService.setLista(data);
          })
        })
      }
      this.router.navigate(['membership']);
    }
    else{
      this.mensaje = "Complete los datos requeridos"
    }
  }
  init() {
    if (this.edicion) {
      this.membershipService.listarId(this.id).subscribe(data => {
        this.membership = data;
      })
    }

  }

}
