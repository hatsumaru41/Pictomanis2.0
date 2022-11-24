import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, EMPTY } from 'rxjs';
import { Membership } from '../model/membership';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {
  url:string="http://localhost:8081/membership"
  private listaCambio = new Subject<Membership[]>()
  private confirmaEliminacion = new Subject<Boolean>()
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
    modificar(membership: Membership){
      return this.http.put(this.url + "/"+membership.idMembership, membership);
    }
    listarId(id: number){
      return this.http.get<Membership>(`${this.url}/${id}`);
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
    buscar(texto: string){
      if(texto.length !=0){
        return this.http.post<Membership[]>(`${this.url}/buscar`, texto.toLowerCase(), {
        });
      }
      return EMPTY;
    }
}
