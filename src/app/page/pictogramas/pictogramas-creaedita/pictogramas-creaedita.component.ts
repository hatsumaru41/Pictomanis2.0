import { Component, OnInit } from '@angular/core';
import { Pictograma } from 'src/app/model/pictograma';
import { PictogramaService } from 'src/app/service/pictogramas.service';
import { ActivatedRoute , Params , Router } from '@angular/router';

@Component({
  selector: 'app-pictogramas-creaedita',
  templateUrl: './pictogramas-creaedita.component.html',
  styleUrls: ['./pictogramas-creaedita.component.css']
})
export class PictogramasCreaeditaComponent implements OnInit {
  Pictograma : Pictograma = new Pictograma() ; 
  mensaje:string="" ; 
  edicion:boolean = false ; 
  id:number = 0 ; 

  constructor(private PictogramaService:PictogramaService , private router:Router , private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id = data['id'] ; 
      this.edicion = data['id'] != null ; 
      this.init() ; 


    })
  }
  aceptar(): void {
    if (this.Pictograma.namePictograma.length > 0 && this.Pictograma.namePictograma.length > 0){
         if (this.edicion){
          this.PictogramaService.modificar(this.Pictograma).subscribe(data => {
             this.PictogramaService.listar().subscribe(data => {
                this.PictogramaService.setLista(data);
               
             })
          })

         }else {

            this.PictogramaService.insertar(this.Pictograma).subscribe(data => {
              this.PictogramaService.listar().subscribe(data => {
                this.PictogramaService.setLista(data);
              })
            })
         }
        this.router.navigate(['pictogramas']); 
    } else {
            this.mensaje = "COMPLETE LOS ESPACIOS REQUERIDOS"

    }


  }

  init(){
    if (this.edicion) {
      this.PictogramaService.listarId(this.id).subscribe(data => {this.Pictograma = data ;})
          

    }
  }
}
