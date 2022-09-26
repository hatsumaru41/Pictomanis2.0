import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Rol } from '../model/rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  url:string="http://localhost:5000/Rol"
  private listaCambio = new Subject<Rol[]>()
    constructor(private http:HttpClient) { }
    listar(){
      return this.http.get<Rol[]>(this.url);
    }
    insertar(idiomas: Rol){
      return this.http.post(this.url, idiomas);
    }
    setLista(listaNueva: Rol[]){
      this.listaCambio.next(listaNueva);
    }
    getLista() {
      return this.listaCambio.asObservable();
    }
}
