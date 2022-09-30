import { rol } from './../model/rol';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject, EMPTY } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class rolService {
  url: string = "http://localhost:5000/rol";
  private listaCambio = new Subject<rol[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<rol[]>(this.url);
  }
  insertar(Rol: rol) {
      return this.http.post(this.url, rol);
    }
  setLista(listaNueva: rol[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(Rol: rol){
    return this.http.put(this.url + "/" + Rol.id, Rol);
  }
  listarId(id: number) {
    return this.http.get<rol>(`${this.url}/${id}`);
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
      return this.http.post<rol[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
}
