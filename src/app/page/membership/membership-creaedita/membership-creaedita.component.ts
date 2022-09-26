import { Component, OnInit } from '@angular/core';
import { MembershipService } from 'src/app/service/membership.service';
import { Router } from '@angular/router';
import { Membership } from 'src/app/model/membership';

@Component({
  selector: 'app-membership-creaedita',
  templateUrl: './membership-creaedita.component.html',
  styleUrls: ['./membership-creaedita.component.css']
})
export class MembershipCreaeditaComponent implements OnInit {
  membership: Membership = new Membership();
  constructor(private membershipService: MembershipService, private router: Router) { }

  ngOnInit(): void {
  }
  aceptar(): void {
    if (this.membership.miembro.length > 0) {

      this.membershipService.insertar(this.membership).subscribe(data => {
        this.membershipService.listar().subscribe(data => {
          this.membershipService.setLista(data);
        })
      })
      this.router.navigate(['Membership']);
    }
  }

}
