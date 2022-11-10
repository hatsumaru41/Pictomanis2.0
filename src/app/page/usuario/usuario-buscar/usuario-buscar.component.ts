import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/model/usuario';
import { UsuarioService} from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-buscar',
  templateUrl: './usuario-buscar.component.html',
  styleUrls: ['./usuario-buscar.component.css']
})
export class UsuarioBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private UsuarioService: UsuarioService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: usuario[] = [];
    this.UsuarioService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nameUsuario.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.UsuarioService.setLista(array);
    })
  }
}
