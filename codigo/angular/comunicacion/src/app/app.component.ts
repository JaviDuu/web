import { Component } from '@angular/core';
import { usuario } from '../modelo/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comunicacion';

  user1: usuario = {
    nombre: "david",
    apellido: "gilmour",
    telefono: "123456789",
    correo: "david@email.com",
    image: "this "
    };
    user2: usuario = {
    nombre: "roger",
    apellido: "waters",
    telefono: "123456789",
    correo: "roger@email.com",
    image: "that "
    };
    user3: usuario = {
      nombre: "syd",
      apellido: "barrett",
      telefono: "123456789",
      correo: "syd@email.com",
      image: "these "
    };
      
}
