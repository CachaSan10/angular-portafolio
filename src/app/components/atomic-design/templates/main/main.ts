import { Component } from '@angular/core';
import { CardPresentacion } from "../../organisms/card-presentacion/card-presentacion";
import { CardProyecto } from "../../organisms/card-proyecto/card-proyecto";

@Component({
  selector: 'app-main',
  imports: [CardPresentacion, CardProyecto],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {


  Proyectos:any[]= [
    {
      titulo:"proyecto 1",
      descripcion:"descripcion proyecto 1",
      urlImagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Escudo_del_Club_Atl%C3%A9tico_San_Lorenzo_de_Almagro.svg/250px-Escudo_del_Club_Atl%C3%A9tico_San_Lorenzo_de_Almagro.svg.png",
      altImg: "imagen proyecto 1",
      urlProyecto: [
        {
          clase:"btn btn-primary mb-2 w-75",
          icono:"bi bi-github",
          texto:"Ver en GitHub ",
          urlProyecto:"https://getbootstrap.com/docs/5.3/components/card/"
        },
        {
           clase:"btn btn-outline-secondary w-75",
          icono:"bi bi-link-45deg",
          texto:"Ver Demo ",
          urlProyecto:"https://getbootstrap.com/docs/5.3/components/card/"
        }
      ]
    }
  ]

}
