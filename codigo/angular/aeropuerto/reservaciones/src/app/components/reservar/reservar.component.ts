import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css']
})
export class ReservarComponent implements OnInit {

  avion: any = {
    dia: ''
  };

  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.avion = {
      dia: this.rutaActiva.snapshot.params['id']
    };
    console.log(this.avion);
  }


  guardarDiayHora(dia: string, hora: string) {
    const imprimir = JSON.parse(localStorage.getItem('imprimir') || '[]');
    imprimir.push({dia, hora});
    localStorage.setItem('imprimir', JSON.stringify(imprimir));
  }


  reservarVuelo(hora: string) {
    localStorage.setItem('dia', this.avion.dia);
    localStorage.setItem('hora', hora);
  }

}
