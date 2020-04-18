import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  URLAPI = "http://localhost:3000/api";
  constructor(private http:HttpClient){}

  getItems(){
    return this.http.get(`${this.URLAPI}/facturas`)
  }
  buscarfact(id){
    return this.http.get(`${this.URLAPI}/facturas/calcular/${id}`)
  }
  
}
