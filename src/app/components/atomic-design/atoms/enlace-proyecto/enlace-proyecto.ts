import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-enlace-proyecto',
  imports: [NgClass],
  templateUrl: './enlace-proyecto.html',
  styleUrl: './enlace-proyecto.css'
})
export class EnlaceProyecto {
@Input() urlProyecto:string = "";
@Input() clase:string="";
@Input() icono:string="";
@Input() texto:string="";
}
