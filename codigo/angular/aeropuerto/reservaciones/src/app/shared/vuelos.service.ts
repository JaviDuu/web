import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VuelosService {

//Informacion de las reservaciones
  private vuelo:Vuelo[] = [
    {
      origen_Destino:"Mexico",
      descripcion:"México es un país entre los Estados Unidos y América Central, conocido por las playas en el Pacífico y el golfo de México, y su diverso paisaje de montañas, desiertos y selvas. Las ruinas antiguas, como Teotihuacán y la ciudad maya de Chichén Itzá, se distribuyen por el país, al igual que las ciudades de la época colonial española.",
      img: "../assets/img/mex.mp4",
    },
    {
      origen_Destino:"España",
      descripcion:"España, país de la península ibérica de Europa, incluye 17 regiones autónomas con diversas características geográficas y culturales. ",
      img: "../assets/img/esp.mp4",
    },
    {
      origen_Destino:"Paris",
      descripcion:"París, la capital de Francia, es una importante ciudad europea y un centro mundial del arte, la moda, la gastronomía y la cultura. Su paisaje urbano del siglo XIX está entrecruzado por amplios bulevares y el río Sena. Aparte de estos hitos, como la Torre Eiffel y la catedral gótica de Notre Dame del siglo XII, la ciudad es famosa por su cultura del café y las tiendas de moda de diseñador a lo largo de la calle Rue du Faubourg Saint-Honoré.",
      img:"../assets/img/par.mp4",
    },
    {
      origen_Destino:"Japon",
      descripcion:"Japón es una nación insular del océano Pacífico con densas ciudades, palacios imperiales, parques nacionales montañosos y miles de santuarios y templos. El tren bala Shinkansen conecta las islas principales de Kyushu (con las playas subtropicales de Okinawa), Honshu (con Tokio y el memorial del bombardeo atómico en Hiroshima) y Hokkaido (famosa por el esquí). Tokio, la capital, es famosa por sus rascacielos, el comercio y la cultura pop.",
    img:"../assets/img/jap.mp4",
    },
    {
      origen_Destino:"Corea",
      descripcion:"La República de Corea, comúnmente conocida como Corea del Sur, ​ es un país soberano de Asia Oriental, ubicado en la parte sur de la península de Corea. Limita al norte con Corea del Norte, con la cual integró un solo país hasta 1945.",
      img: "../assets/img/cor.mp4",
    },


  ];

  constructor() {
    console.log("listo para usarse");
   }
   getVuelo(): Vuelo[]{
    return this.vuelo;
   }
}

//Arreglo
export interface Vuelo{
  origen_Destino:string;
  descripcion:string;
  img:string,

}
