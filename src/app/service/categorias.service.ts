import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categorias } from '../model/categorias';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  url:string="http://localhost:5000/categorias"
private listaCambio = new Subject<Categorias[]>()
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Categorias[]>(this.url);
  }
  insertar(idiomas: Categorias){
    return this.http.post(this.url, idiomas);
  }
  setLista(listaNueva: Categorias[]){
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
}
