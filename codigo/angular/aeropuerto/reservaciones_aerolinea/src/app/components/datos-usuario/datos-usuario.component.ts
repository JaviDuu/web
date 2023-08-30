import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos-usuario',
  templateUrl: './datos-usuario.component.html',
  styleUrls: ['./datos-usuario.component.css']
})
export class DatosUsuarioComponent {

  datosForm: FormGroup;

  // Se usa el decorador @ViewChild para obtener la referencia al formulario en el HTML
  @ViewChild('userForm') userForm!: ElementRef<HTMLFormElement>;

  constructor(private router: Router) {
    this.datosForm = new FormGroup({
      'nombre': new FormControl('', Validators.required),
      'pasajeros': new FormControl('', Validators.required),
      'contacto': new FormControl('', Validators.required)
    });
  }

  confirmar() {
    // Se obtiene la referencia al formulario nativo del DOM usando la propiedad nativeElement del ElementRef
    const formulario = this.userForm.nativeElement;

    // Se obtiene el valor del campo "nombre" del formulario
    const nombre = formulario['nombre'].value;

    // Se obtienen los valores de "dia" y "hora" del localStorage
    const dia = localStorage.getItem('dia');
    const hora = localStorage.getItem('hora');

    // Se convierte la cadena JSON guardada en el localStorage en un arreglo de objetos, usando una cadena vacía como valor por defecto si el valor no existe
    const imprimir = JSON.parse(localStorage.getItem('imprimir') || '[]');

    // Se comprueba si el arreglo "imprimir" existe y tiene elementos
    if (imprimir.length > 0) {
      // Se obtiene el último elemento del arreglo "imprimir"
      const ultimo = imprimir[imprimir.length - 1];

      // Si el último elemento ya tiene un valor para "dia" y "hora", se crea un nuevo objeto en el arreglo "imprimir" con los valores de "dia", "hora" y "nombre"
      if (ultimo.dia && ultimo.hora) {
        imprimir.push({ dia, hora, nombre });
      } else {
        // De lo contrario, se actualiza el último elemento del arreglo "imprimir" con los valores de "dia", "hora" y "nombre"
        ultimo.dia = dia;
        ultimo.hora = hora;
        ultimo.nombre = nombre;
      }
    } else {
      // Si el arreglo "imprimir" está vacío, se crea un nuevo objeto con los valores de "dia", "hora" y "nombre"
      imprimir.push({ dia, hora, nombre });
    }

    // Se guarda el arreglo actualizado en el localStorage como una cadena JSON
    localStorage.setItem('imprimir', JSON.stringify(imprimir));

    // Se redirecciona al componente "VuelosReservadosComponent"
    this.router.navigate(['/reservar/reservaciones']);
  }
}
