import { HttpClient } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-clima-actual',
  templateUrl: './clima-actual.component.html',
  styleUrls: ['./clima-actual.component.css']
})
export class ClimaActualComponent {
  url = 'https://api.datos.gob.mx/v1/condiciones-atmosfericas';
  httpData: any;
  array: any[] = [];
  datos: any[] = [];


  constructor(private httpclient: HttpClient) {
    console.log(this.httpData);
    this.httpclient.get(this.url).subscribe((data) => {
      this.httpData = data;
      console.log(this.httpData);
      this.datos = this.httpData.results;
      console.log(this.datos);
    });
  }
}
