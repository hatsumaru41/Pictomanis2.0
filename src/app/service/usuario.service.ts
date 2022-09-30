import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { usuario } from '../model/usuario';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url: string = "http://localhost:5000/usuarios";
  private listaCambio = new Subject<usuario[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<usuario[]>(this.url);
  }
  insertar(Usuario: usuario) { 
      return this.http.post(this.url, Usuario);   
    }
  setLista(listaNueva: usuario[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(Usuario: usuario){
    return this.http.put(this.url + "/" + Usuario.id, Usuario);
  }
  listarId(id: number) {
    return this.http.get<usuario>(`${this.url}/${id}`);
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
}
