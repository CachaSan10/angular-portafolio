import { Component } from '@angular/core';
import { CardPresentacion } from "../../organisms/card-presentacion/card-presentacion";

@Component({
  selector: 'app-main',
  imports: [CardPresentacion],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {

}
