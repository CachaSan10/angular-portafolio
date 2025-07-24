import { NgClass } from '@angular/common';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-imagen',
  imports: [NgClass],
  templateUrl: './imagen.html',
  styleUrl: './imagen.css'
})
export class Imagen {
@Input() urlImagen:string="";
@Input() altImagen:string="";
@Input() clase:string="";

}
