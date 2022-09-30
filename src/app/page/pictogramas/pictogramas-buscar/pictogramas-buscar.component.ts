import { Component, OnInit } from '@angular/core';
import { Pictograma } from 'src/app/model/pictograma';
import { PictogramaService } from 'src/app/service/pictogramas.service';

@Component({
  selector: 'app-pictogramas-buscar',
  templateUrl: './pictogramas-buscar.component.html',
  styleUrls: ['./pictogramas-buscar.component.css']
})
export class PictogramasBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private PictogramaService:PictogramaService) { }


  ngOnInit(): void {
  }
  buscar(e: any)
  {
   let array: Pictograma[] = [] ; 
   this.PictogramaService.listar().subscribe(data => {
      data.forEach((element,index)=>{
       if (element.namePictograma.includes(e.target.value)){
          array.push(data[index]) ; 
       }

      }) ; 
      this.PictogramaService.setLista(array) ; 



   })
 



  }
}
