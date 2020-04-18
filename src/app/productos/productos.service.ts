import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  URLAPI = "http://localhost:3000/api"; //URL DE LA API
  constructor(private http:HttpClient) { }

  getPrductos(){
    return this.http.get(`${this.URLAPI}/productos`)
  }

  DelProducto(id){
    return this.http.delete(`${this.URLAPI}/productos/${id}`)
  }

  agregarProduct(producto){    
    return this.http.post(`${this.URLAPI}/productos`,producto)
  }
  updateProduct(id: string|number, updatedGame){
    return this.http.put(`${this.URLAPI}/productos/${id}`, updatedGame);
  }
}
