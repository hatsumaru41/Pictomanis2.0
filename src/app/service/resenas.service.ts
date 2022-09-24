import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resenas } from '../model/reseñas';

@Injectable({
  providedIn: 'root'
})
export class ResenasService {
url:string="http://localhost:5000/Resenas"
  constructor(private http:HttpClient) { }

  listar() {
    return this.http.get<Resenas[]>(this.url);
  }
}
