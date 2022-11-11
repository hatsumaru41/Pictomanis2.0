import { Categoria } from 'src/app/model/categoria';
import { usuario } from "./usuario";

export class Pictograma{
    idPictograma : number = 0 ; 
    namePictograma : string = ""  ; 
    usuario : usuario = new usuario();
    categoria: Categoria = new Categoria();
 }