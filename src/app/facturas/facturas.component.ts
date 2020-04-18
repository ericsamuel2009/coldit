import { Component, OnInit } from '@angular/core';
import { FacturasService } from './facturas.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {
  items:any;
  newItem:any;
  calculototal:any;
  client:string;
  constructor(private facturasService:FacturasService) { }

  ngOnInit(): void {
    this.getItems()
  }

  getItems(){
    this.facturasService.getItems().subscribe(
      info=>{
        this.items = info;
        console.log(info);
      }
    )
    
  }

  buscarfactura(){
    this.facturasService.buscarfact(this.items.Producto).subscribe(
      info=>{
        this.calculototal = info;
        this.client = this.items.cliente

        console.log(this.items.cliente);
      //this.getItems();
      }
    )
    
  }

}
