import { Component, Input } from '@angular/core';
import { Imagen } from "../../atoms/imagen/imagen";
import { GrupoEnlaceProyecto } from "../../molecules/grupo-enlace-proyecto/grupo-enlace-proyecto";
import { EnlaceProyecto } from '../../atoms/enlace-proyecto/enlace-proyecto';

@Component({
  selector: 'app-card-proyecto',
  imports: [Imagen, GrupoEnlaceProyecto],
  templateUrl: './card-proyecto.html',
  styleUrl: './card-proyecto.css'
})
export class CardProyecto {
  @Input() tituloProyecto:string = "";
  @Input() descripcionProyecto:string = "";
  @Input() urlProyecto: EnlaceProyecto[]= [];
  @Input() altImg:string = ""
@Input() urlImagen:string="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Escudo_del_Club_Atl%C3%A9tico_San_Lorenzo_de_Almagro.svg/250px-Escudo_del_Club_Atl%C3%A9tico_San_Lorenzo_de_Almagro.svg.png"
}
