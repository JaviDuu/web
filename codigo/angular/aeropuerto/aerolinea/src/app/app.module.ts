import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { ReservarComponent } from './components/reservar/reservar.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { DatosUsuarioComponent } from './components/datos-usuario/datos-usuario.component';
import { VuelosReservadosComponent } from './components/vuelos-reservados/vuelos-reservados.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/registrar/registrar.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CalendarioComponent,
    ReservarComponent,
    AcercaDeComponent,
    DatosUsuarioComponent,
    VuelosReservadosComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
