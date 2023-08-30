import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntegrantesService {

  empleados:any=[
    {
      _id: "295649",
      name: "Lizbeth Hernandez",
      email: "al295649@edu.uaa.mx"
    },
    {
      _id: "271010",
      name: "Montserrat Flores",
      email: "al271010@edu.uaa.mx"
    },
    {
      _id: "291590",
      name: "Javier Guerrero",
      email: "al291590@edu.uaa.mx"
    },
    {
      _id: "292422",
      name: "Luis Jímenez",
      email: "al292422@edu.uaa.mx"
    },
    {
      _id: "243756",
      name: "Fatima Martínez",
      email: "al243756@edu.uaa.mx"
    }

  ]


  constructor() { }
}
