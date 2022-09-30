import { Component, OnInit } from '@angular/core';
import { Membership } from 'src/app/model/membership';
import { MembershipService } from 'src/app/service/membership.service';

@Component({
  selector: 'app-membership-buscar',
  templateUrl: './membership-buscar.component.html',
  styleUrls: ['./membership-buscar.component.css']
})
export class MembershipBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private MembershipService: MembershipService) { }

  ngOnInit(): void {
  }
  buscar(e: any){
    let array: Membership[] = [];
    this.MembershipService.listar().subscribe(data =>{
      data.forEach((element, index) =>{
        if(element.miembro.includes(e.target.value)){
          array.push(data[index]);
        }
      });
      this.MembershipService.setLista(array);
    })
  }

}
