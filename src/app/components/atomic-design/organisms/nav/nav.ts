import { Component } from '@angular/core';
import { GrupoEnlacesMenu } from "../../molecules/grupo-enlaces-menu/grupo-enlaces-menu";
import { ItemMenu } from "../../atoms/item-menu/item-menu";

@Component({
  selector: 'app-nav',
  imports: [GrupoEnlacesMenu],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {

}
