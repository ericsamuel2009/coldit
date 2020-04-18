import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  URLAPI = "http://localhost:3000/api";
  constructor(private http:HttpClient){}

  getItems(){
    return this.http.get(`${this.URLAPI}/items`)
  }
  getproductos(){
    return this.http.get(`${this.URLAPI}/productos`)
  }

  agregaritem(newItem){
    return this.http.post(`${this.URLAPI}/items`,newItem)
  }

  getvalor(codigo){
    return this.http.get(`${this.URLAPI}/items/${codigo}`)
  }

}
