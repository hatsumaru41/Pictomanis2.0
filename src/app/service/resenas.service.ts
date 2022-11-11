import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Subject } from 'rxjs';
import { Resenas } from '../model/resenas';

@Injectable({
  providedIn: 'root'
})
export class ResenasService {
url:string="http://localhost:8081/resenas"
private listaCambio = new Subject<Resenas[]>()
private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }

  listar() {
    return this.http.get<Resenas[]>(this.url);
  }
  insertar(resenas: Resenas){
    return this.http.post(this.url, resenas);
  }
  setLista(listaNueva: Resenas[]){
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(types: Resenas) {
    return this.http.put(this.url + '/' + types.idResenas, types);
  }
  
    listarId(id: number) {
      return this.http.get<Resenas>(`${this.url}/${id}`);
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
        return this.http.post<Resenas[]>(`${this.url}/buscar`, texto.toLowerCase(), {
        });
      }
      return EMPTY;
    }
  }

