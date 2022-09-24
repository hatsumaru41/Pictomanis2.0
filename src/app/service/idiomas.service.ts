import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Idiomas } from '../model/idiomas';

@Injectable({
  providedIn: 'root'
})
export class IdiomasService {
url:string="http://localhost:5000/Idiomas"
private listaCambio = new Subject<Idiomas[]>()
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
}
