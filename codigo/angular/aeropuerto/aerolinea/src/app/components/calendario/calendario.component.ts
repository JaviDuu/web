import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent {

  calanderForm = this.formBuilder.group({
    dia: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  onSubmit(): void{
    this.router.navigate(['reservar/opciones', this.calanderForm.value.dia]);
  }
}
