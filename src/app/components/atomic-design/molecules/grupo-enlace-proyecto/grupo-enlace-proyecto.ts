import { Component, Input } from '@angular/core';
import { EnlaceProyecto } from "../../atoms/enlace-proyecto/enlace-proyecto";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grupo-enlace-proyecto',
  imports: [EnlaceProyecto, CommonModule],
  templateUrl: './grupo-enlace-proyecto.html',
  styleUrl: './grupo-enlace-proyecto.css'
})
export class GrupoEnlaceProyecto {
@Input() enlacesProyecto: EnlaceProyecto[] = [];
}
