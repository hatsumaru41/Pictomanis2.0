import { Categorias } from './categorias';
import { usuario } from "./usuario";

export class Pictograma{
    idPictograma : number = 0 ;
    namePictograma : string = ""  ;
    idUsuario : usuario = new usuario();
    idCategoria: Categorias = new Categorias();
 }
