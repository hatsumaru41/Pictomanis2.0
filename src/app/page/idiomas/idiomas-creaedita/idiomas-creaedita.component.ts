import { Component, OnInit } from '@angular/core';
import { IdiomasService } from 'src/app/service/idiomas.service';
import { Router } from '@angular/router';
import { Idiomas } from 'src/app/model/idiomas';
@Component({
  selector: 'app-idiomas-creaedita',
  templateUrl: './idiomas-creaedita.component.html',
  styleUrls: ['./idiomas-creaedita.component.css']
})
export class IdiomasCreaeditaComponent implements OnInit {
  idiomas: Idiomas = new Idiomas();
  constructor(private idiomasService: IdiomasService, private router: Router) { }

  ngOnInit(): void {
  }

  aceptar(): void {
    if (this.idiomas.idiomas.length > 0) {

      this.idiomasService.insertar(this.idiomas).subscribe(data => {
        this.idiomasService.listar().subscribe(data => {
          this.idiomasService.setLista(data);
        })
      })
      this.router.navigate(['Idioma']);
    }
  }

}
