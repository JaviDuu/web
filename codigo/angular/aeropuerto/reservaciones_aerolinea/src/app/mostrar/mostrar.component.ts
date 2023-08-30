import { Component, OnInit } from '@angular/core';
//Servicio
import {Vuelo, VuelosService} from'../shared/vuelos.service';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit{

  vuelo: Vuelo[];

  constructor(public servicio: VuelosService){
    this.vuelo=this.servicio.getVuelo();
    console.log(this.vuelo);

  }

  ngOnInit():void{

  }

}
