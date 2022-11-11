import { Pictograma } from "../model/pictograma";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject, EMPTY } from "rxjs";
@Injectable({
    providedIn: 'root'
  })
  export class PictogramaService {
    url:string = "http://localhost:8081/pictogramas"
    private listaCambio = new Subject<Pictograma[]>()
    private confirmaEliminacion = new Subject<Boolean>()
  
    constructor(private http: HttpClient) { }
    listar() {
      return this.http.get<Pictograma[]>(this.url);
    }
    insertar(Pictograma: Pictograma) {
      return this.http.post(this.url, Pictograma);
    }
    setLista(listaNueva: Pictograma[]) {
      this.listaCambio.next(listaNueva);
    }
    getLista() {
      return this.listaCambio.asObservable();
    }
    modificar(Pictograma: Pictograma) {
      return this.http.put(this.url + "/" + Pictograma.idPictograma, Pictograma);
    }
    listarId(id: number) {
      return this.http.get<Pictograma>(`${this.url}/${id}`);
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
        return this.http.post<Pictograma[]>(`${this.url}/buscar`, texto.toLowerCase(), {
        });
      }
      return EMPTY;
    }
  }
  