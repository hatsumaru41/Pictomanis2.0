import { UsuarioService } from './../../../service/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Pictograma } from 'src/app/model/pictograma';
import { PictogramaService } from 'src/app/service/pictogramas.service';
import { ActivatedRoute , Params , Router } from '@angular/router';
import { Categoria } from 'src/app/model/categoria';
import { usuario } from 'src/app/model/usuario';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-pictogramas-creaedita',
  templateUrl: './pictogramas-creaedita.component.html',
  styleUrls: ['./pictogramas-creaedita.component.css']
})
export class PictogramasCreaeditaComponent implements OnInit {
  Pictograma : Pictograma = new Pictograma() ; 
  mensaje:string="" ; 
  edicion:boolean = false ; 
  id:number = 0;
  listaCategoria: Categoria[] = [];
  idCategoriaSeleccionado: number = 0;
  listaUsuario: usuario[] = [];
  idUsuarioSeleccionado: number = 0;
  constructor(private PictogramaService:PictogramaService , private router:Router , private route:ActivatedRoute, private CategoriaService: CategoriaService, private UsuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id = data['id'] ; 
      this.edicion = data['id'] != null ; 
      this.init() ; 
    });
    this.CategoriaService.listar().subscribe(data =>{ this.listaCategoria = data });
    this.UsuarioService.listar().subscribe(data =>{this.listaUsuario = data});
  }
  aceptar(): void {
    if (this.Pictograma.namePictograma.length > 0 && this.idCategoriaSeleccionado > 0 && this.idUsuarioSeleccionado > 0){
      let d = new Categoria();
      let e = new usuario();

      d.idCategoria = this.idCategoriaSeleccionado;
      this.Pictograma.idCategoria = d;

      e.idUsuario = this.idUsuarioSeleccionado;
      this.Pictograma.idUsuario = e;
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
      this.PictogramaService.listarId(this.id).subscribe(data => {
        this.Pictograma = data;
        console.log(data);
        this.idCategoriaSeleccionado = data.idCategoria.idCategoria;
        this.idUsuarioSeleccionado = data.idUsuario.idUsuario;
      })
    }
  }
}
