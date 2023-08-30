import { Component } from '@angular/core';

@Component({
  selector: 'app-vuelos-reservados',
  templateUrl: './vuelos-reservados.component.html',
  styleUrls: ['./vuelos-reservados.component.css']
})
export class VuelosReservadosComponent {
  imprimir: any[] = JSON.parse(localStorage.getItem('imprimir') || '[]');
}

