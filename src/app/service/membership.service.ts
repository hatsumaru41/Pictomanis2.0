import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Membership } from '../model/membership';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {
  url:string="http://localhost:5000/Membership"
  private listaCambio = new Subject<Membership[]>()
    constructor(private http:HttpClient) { }
    listar(){
      return this.http.get<Membership[]>(this.url);
    }
    insertar(membership: Membership){
      return this.http.post(this.url, membership);
    }
    setLista(listaNueva: Membership[]){
      this.listaCambio.next(listaNueva);
    }
    getLista() {
      return this.listaCambio.asObservable();
    }
}
