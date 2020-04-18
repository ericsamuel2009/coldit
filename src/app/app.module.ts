import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule} from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CasaComponent } from './casa/casa.component';
import { ProductosComponent } from './productos/productos.component';
import { FacturasComponent } from './facturas/facturas.component';
import { ItemsComponent } from './items/items.component';

//SEVICIOS

import { ProductosService } from './productos/productos.service';
import { FacturasService } from './facturas/facturas.service';
import { ItemsService } from './items/items.service';

const rutas:Routes = [
  {path:'',component:CasaComponent},
  {path:'Productos',component:ProductosComponent},
  {path:'Facturas',component:FacturasComponent},
  {path:'Items',component:ItemsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CasaComponent,
    ProductosComponent,
    FacturasComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(rutas),
    FormsModule
  ],
  providers: [
    ProductosService,
    FacturasService,
    ItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
