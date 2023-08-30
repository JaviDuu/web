import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  nombre: string = "";
  promedio: string = "";
  estudiantes: Datos[] = [
    {nombre: "sigma", promedio: "10"},
    {nombre: "alpha", promedio: "7"},
    {nombre: "beta", promedio: "5"},
    {nombre: "deez", promedio: "7"},
    {nombre: "sughma", promedio: "8"}
  ];

  constructor(){
    console.log("soy el constructor, listo atributos inicializados");
    console.log(this.estudiantes.map(estudiante => estudiante.nombre));
  }

  ngOnInit(): void {
    console.log("soy el OnInit en este momento el componente esta cargando");
    //foco en la captura en el momento 
    const element = document.getElementById('exampleInput1');
    if (element) {
      element.focus();
    }
  }

  agregarDatos():void{
    //objeto local 
    let aux: Datos = {
      nombre: this.nombre,
      promedio: this.promedio,
    };

    this.estudiantes.push(aux);
    console.log(this.estudiantes);
    this.borrarDatos();
    const element = document.getElementById('exampleInput1');
    if (element) {
      element.focus();
    }
  }

  borrarDatos():void{
    this.nombre = '';
    this.promedio = "";
  }

  eliminarRegistro(nombre: string, evento: Event):void{
    //localiza el nombre y devuelve el indice del arreglo donde esta 
    let indice = this.estudiantes.findIndex((p) => p.nombre === nombre);
    this.estudiantes.splice(indice, 1);

    alert('estudiante ' + nombre + ' eliminado. \nEvento capturado: ' + evento.type + '.' );
  }
  
}

interface Datos{
  nombre: string;
  promedio: string;
}
