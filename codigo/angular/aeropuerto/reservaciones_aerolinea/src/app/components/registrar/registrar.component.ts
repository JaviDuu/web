import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {

  // Se define el formulario de registro del usuario
  RegisterForm = this.formBuilder.group({
    usuario: '',
    contrasenia: ''
  });

  // El constructor recibe una instancia de FormBuilder para construir el formulario
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  // Esta función se ejecuta cuando el formulario se envía
  onSubmit(): void{
    // Se obtiene el objeto usuarios desde el almacenamiento local (si no existe, se inicializa como un objeto vacío)
    var usuarios = JSON.parse(localStorage.getItem("usuarios") || '{}');
    // Se obtiene el nombre de usuario del formulario y se convierte a una cadena
    var alias = JSON.stringify(this.RegisterForm.value.usuario);
    // Se guarda el nombre de usuario actual en el almacenamiento local
    localStorage.setItem("actual", alias);

    // Se obtiene el objeto de usuarios desde el almacenamiento local y se convierte en un objeto de JavaScript
    var user: any = localStorage.getItem("usuarios");
    user = JSON.parse(user);
    // Se establece la variable "existe" en 0 (es decir, no existe el usuario)
    var existe = 0;
    // Se recorre el objeto de usuarios para comprobar si el usuario ya existe
    for (var i in user) {
      if (i == localStorage.getItem("actual")) {
          // Si el usuario ya existe, se establece la variable "existe" en 1 y se sale del bucle
          existe=1;
          Swal.fire(
            'Alerta!',
            'Ya existe el usuario!',
            'info'
          )
          localStorage.setItem("actual", "");
          break;
      }
    }
    // Si el usuario no existe, se agrega a la lista de usuarios y se guarda en el almacenamiento local
    if(existe==0){
      usuarios[alias]= {pass: this.RegisterForm.value.contrasenia};
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      Swal.fire(
        'Exito!',
        'Has sido registrado!',
        'success'
      )
    }
    this.router.navigate(['/reservar/calendario']);
  }

}
