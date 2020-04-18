import { Component, OnInit } from '@angular/core';
import { ProductosService } from './productos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  post:any;
  productos:any;
  newproducto:any;
  status:string;
  add:boolean;
  constructor(private rutasact:ActivatedRoute,private productosService:ProductosService) { }

  ngOnInit(): void {
    this.getProductos()
  }


  getProductos(){ //OBTENGO TODOS LOS PRODUCTOS
  this.productosService.getPrductos().subscribe(
    info=>{
      this.productos = info;
    }
  )
  this.status = 'guardar';
  }

  DeleteProducto(id:string){ //ELIMINO PRODUCTO
    this.productosService.DelProducto(id).subscribe(
      info=>{
       console.log(info)
       this.getProductos();
      }
    )
  }


  agregarProducto(){ // AGREGO PRODUCTO
    if (this.productos.codigo == "" && this.status != 'edit' || this.productos.codigo == null && this.status != 'edit') {
      alert("El Codigo es requerido")
      return false
    }
    if (this.productos.nombre == ""  || this.productos.nombre == null) {
      alert("El Nombre es requerido")
      return false 
    }
    if (this.productos.valor == ""  || this.productos.valor == null) {
      alert("El valor es requerido")
      return false 
    }

    if (this.status == 'edit') { //SI EL ESTADO ESTA EN 'EDIT' ACTUALIZA SI NO GUARDA
      this.actualizarproducto()
    }else{
      this.newproducto = {
        "codigo":this.productos.codigo,
        "nombre":this.productos.nombre,
        "valor":this.productos.valor,
      }
      this.productosService.agregarProduct(this.newproducto).subscribe(
        info=>{
        this.getProductos();
        }
      )
    }
  }

  edit(main){ // CARGO LA INFORMACION EN LOS INPUTS

      this.productos.codigo = main.codigo;
      this.productos.nombre = main.nombre
      this.productos.valor = main.valor
      this.status = 'edit';

    console.log(main);
    
  }

  actualizarproducto(){ //funcion que actializa producto
    this.newproducto = {
      "codigo":this.productos.codigo,
      "nombre":this.productos.nombre,
      "valor":this.productos.valor,
    }
    console.log(this.newproducto  );
    this.productosService.updateProduct(this.productos.codigo, this.newproducto).subscribe(
      info=>{
       console.log('edit')
      this.getProductos();
      }
    )
  }

  cancel(){
    this.productos.codigo = '';
    this.productos.nombre = '';
    this.productos.valor = '';

    this.status = 'guardar';
  }

}