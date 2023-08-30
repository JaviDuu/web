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
import { IntegrantesService } from './components/acerca-de/integrantes.service';

import { MasonryGridComponent } from './components/masonry-grid/masonry-grid.component';
import { ClimaActualComponent } from './components/clima-actual/clima-actual.component';
import { HttpClientModule } from '@angular/common/http';
import { SecurityVideoPipe } from './security-video.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MostrarComponent } from './mostrar/mostrar.component';
import { BuscarComponent } from './buscar/buscar.component';
import { DestinosPopularesComponent } from './components/destinos-populares/destinos-populares.component';


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
    RegistrarComponent,
    MasonryGridComponent,
    ClimaActualComponent,
    SecurityVideoPipe,
    MostrarComponent,
    BuscarComponent,
    DestinosPopularesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [IntegrantesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
