import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { rol } from '../model/rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  url:string="http://localhost:5000/Rol"
  private listaCambio = new Subject<rol[]>()
    constructor(private http:HttpClient) { }
    listar(){
      return this.http.get<rol[]>(this.url);
    }
    insertar(idiomas: rol){
      return this.http.post(this.url, idiomas);
    }
    setLista(listaNueva: rol[]){
      this.listaCambio.next(listaNueva);
    }
    getLista() {
      return this.listaCambio.asObservable();
    }
}
