import { Component, OnInit } from '@angular/core';
import { ItemsService } from './items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items:any;
  productos:any;
  newItem:any;
  valor:any;
  constructor(private itemsService:ItemsService) { }


  ngOnInit(): void {
    this.getItems()
  }

  getItems(){
      this.itemsService.getItems().subscribe(
        info=>{
          this.items = info;
          console.log(info);
        }
      )
      
      
      this.itemsService.getproductos().subscribe(
        info2=>{
          this.productos = info2;
        }
      )
    }

    
  
  agregarvalor(info){ 

    this.itemsService.getvalor(info.codigo).subscribe(
      info4=>{
        this.valor = info4[0].valor;
        this.productos.valor = this.valor
      }
    )
    
  }

    agregaritem(){
      this.newItem = {
        "Producto":this.productos.codigo,
        "cantidad":this.items.cantidad,
        "valorTotal":this.items.cantidad * this.productos.valor
      }
      this.itemsService.agregaritem(this.newItem).subscribe(
        info=>{
        this.getItems();
        }
      )
      console.log(this.newItem);
    }


}
