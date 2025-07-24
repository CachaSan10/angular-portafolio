import { Component } from '@angular/core';
import { Imagen } from "../../atoms/imagen/imagen";

@Component({
  selector: 'app-card-presentacion',
  imports: [Imagen],
  templateUrl: './card-presentacion.html',
  styleUrl: './card-presentacion.css'
})
export class CardPresentacion {
  Imagen = {
    urlImagen: "mis-fotos/perfil.jpg",
    altImagen: "Mi fotografia"
  }
}
