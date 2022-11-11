import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, EMPTY } from 'rxjs';
import { Idiomas } from '../model/idiomas';

@Injectable({
  providedIn: 'root'
})
export class IdiomasService {
 url:string="http://localhost:8081/idiomas"
private listaCambio = new Subject<Idiomas[]>()
private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Idiomas[]>(this.url);
  }
  insertar(idiomas: Idiomas){
    return this.http.post(this.url, idiomas);
  }
  setLista(listaNueva: Idiomas[]){
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(types: Idiomas) {
  return this.http.put(this.url + '/' + types.id, types);
}

  listarId(id: number) {
    return this.http.get<Idiomas>(`${this.url}/${id}`);
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
      return this.http.post<Idiomas[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
}