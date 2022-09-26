import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Resenas } from '../model/resenas';

@Injectable({
  providedIn: 'root'
})
export class ResenasService {
url:string="http://localhost:5000/Resenas"
private listaCambio = new Subject<Resenas[]>()
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
}
