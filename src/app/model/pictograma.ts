import { Categoria } from 'src/app/model/categoria';
import { usuario } from "./usuario";

export class Pictograma{
    idPictograma : number = 0 ; 
    namePictograma : string = ""  ; 
    idUsuario : usuario = new usuario();
    idCategoria: Categoria = new Categoria();
 }