import { Component, OnInit } from '@angular/core';
import { Rol } from 'src/app/model/rol';
import { rolService} from 'src/app/service/rol.service';

@Component({
  selector: 'app-rol-buscar',
  templateUrl: './rol-buscar.component.html',
  styleUrls: ['./rol-buscar.component.css']
})
export class rolBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private RolService: rolService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Rol[] = [];
    this.RolService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nameRol.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.RolService.setLista(array);
    })
  }
}
