import { IntegrantesService } from './integrantes.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent {
  constructor(public integrantesService: IntegrantesService) { }
  ngOnInit() {
    console.log(this.integrantesService.empleados);
  }
}
