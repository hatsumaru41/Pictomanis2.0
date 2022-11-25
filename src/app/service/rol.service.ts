import { Rol } from './../model/rol';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject, EMPTY } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class rolService {
  url: string = "http://localhost:8081/rol";
  private listaCambio = new Subject<Rol[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Rol[]>(this.url);
  }
  insertar(Rol: Rol) {
      return this.http.post(this.url, Rol);
    }
  setLista(listaNueva: Rol[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(Rol: Rol){
    return this.http.put(this.url + "/" + Rol.idRol, Rol);
  }
  listarId(id: number) {
    return this.http.get<Rol>(`${this.url}/${id}`);
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
      return this.http.post<Rol[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
}
