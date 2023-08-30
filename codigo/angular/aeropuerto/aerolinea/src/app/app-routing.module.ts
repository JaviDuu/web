import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { DatosUsuarioComponent } from './components/datos-usuario/datos-usuario.component';
import { ReservarComponent } from './components/reservar/reservar.component';
import { VuelosReservadosComponent } from './components/vuelos-reservados/vuelos-reservados.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/registrar/registrar.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: 'reservar/calendario', component: CalendarioComponent },
  { path: 'reservar/confirmar', component: DatosUsuarioComponent },
  { path: 'reservar/opciones/:id', component: ReservarComponent },
  { path: 'reservar/reservaciones', component: VuelosReservadosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }, // Cuando es la raíz
  { path: '**', redirectTo: 'inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
