import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SweetAlertArrayOptions } from 'sweetalert2';
import Swal from 'sweetalert2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = this.formBuilder.group({
    usuario: '',
    contrasenia: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  onSubmit(): void{
    // Se obtiene el objeto usuarios desde el almacenamiento local (si no existe, se inicializa como un objeto vacío)
    var usuarios = JSON.parse(localStorage.getItem("usuarios") || '{}');
    // Se obtiene el nombre de usuario del formulario y se convierte a una cadena
    var alias = JSON.stringify(this.loginForm.value.usuario);
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
          const storedPassword = usuarios[alias].pass;
          const enteredPassword = this.loginForm.value.contrasenia;
          console.log(storedPassword + "-" + enteredPassword);
          if(storedPassword === enteredPassword){
            console.log("login correcto");
            Swal.fire(
              'Exito!',
              'Has iniciado sesion!',
              'success'
            )
          }else{
            localStorage.setItem("actual", "");
            console.log("login incorrecto");
            Swal.fire(
              'Error!',
              'contraseña incorrecto',
              'error'
            )
            

          }
          // Se podría mostrar una alerta aquí
          break;
      }
    }
    if(existe == 0){
      localStorage.setItem("actual", "");
      Swal.fire(
        'Error!',
        'usuario no existe',
        'error'
      )
    }
    this.router.navigate(['/reservar/calendario']);
  }
  


}
