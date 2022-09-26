import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url:string="http://localhost:5000/Usuario"
  private listaCambio = new Subject<Usuario[]>()
    constructor(private http:HttpClient) { }
    listar(){
      return this.http.get<Usuario[]>(this.url);
    }
    insertar(idiomas: Usuario){
      return this.http.post(this.url, idiomas);
    }
    setLista(listaNueva: Usuario[]){
      this.listaCambio.next(listaNueva);
    }
    getLista() {
      return this.listaCambio.asObservable();
    }
}
