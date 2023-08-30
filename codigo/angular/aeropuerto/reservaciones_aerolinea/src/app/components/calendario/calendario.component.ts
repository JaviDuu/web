import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent {


  calanderForm: FormGroup = this.formBuilder.group({
    dia: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.calanderForm = new FormGroup({
      'dia': new FormControl('', [Validators.required, this.fechaPasada])
    })

  }

  onSubmit(): void{
    this.router.navigate(['reservar/opciones', this.calanderForm.value.dia]);
  }

  fechaPasada(control: AbstractControl): {[key:string]: boolean} | null{
  const fechaIngresada = new Date(control.value);
  const fechaActual = new Date();

  if (fechaIngresada < fechaActual) {
    return { 'fechaPasada': true };
  }

  return null;
  }

}
