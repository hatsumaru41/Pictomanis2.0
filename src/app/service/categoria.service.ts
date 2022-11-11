import { Categorias } from '../model/categoria';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  url:string="http://localhost:8081/Categorias"
  private listaCambio = new Subject<Categorias[]>()
  private confirmaEliminacion = new Subject<Boolean>()
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
  modificar(Categorias: Categorias){
    return this.http.put(this.url + "/" + Categorias.idCategoria, Categorias);
  }
  listarId(id: number){
    return this.http.get<Categorias>(`${this.url}/${id}`);
  }
  eliminar(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<Categorias[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
}
