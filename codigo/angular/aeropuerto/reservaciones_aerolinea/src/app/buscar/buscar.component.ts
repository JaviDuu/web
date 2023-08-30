import { Component, OnInit } from '@angular/core';
//Servicio
import {Vuelo, VuelosService} from'../shared/vuelos.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  vuelo:Vuelo[];
  index:number=-1;
  datos!: Vuelo;
  mensaje:string="";

  constructor(public servicio: VuelosService){
    this.vuelo=this.servicio.getVuelo();
    console.log(this.vuelo);
  }

  ngOnInit(): void {

  }
  //metodo ver que reciba un texto (la resrvacion)

  ver(aux:string){
    console.log("Metodo ver"+aux);
    this.index= this.vuelo.findIndex(p => p.origen_Destino === aux);
    console.log(this.index);
    if(this.index !== -1){
      this.datos=this.vuelo[this.index];
      //console.log(this.datos);
  }
    else{
        this.mensaje="La Reservacion no existe";
       // console.log(this.mensaje);
      setTimeout(() =>{
        this.mensaje="";
    },2000);
    }

  }
}
