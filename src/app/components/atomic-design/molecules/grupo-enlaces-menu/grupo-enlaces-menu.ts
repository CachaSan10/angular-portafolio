import { Component } from '@angular/core';
import { ItemMenu } from "../../atoms/item-menu/item-menu";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grupo-enlaces-menu',
  imports: [ ItemMenu,CommonModule],
  templateUrl: './grupo-enlaces-menu.html',
  styleUrl: './grupo-enlaces-menu.css'
})
export class GrupoEnlacesMenu {
 navItem: ItemMenu[] =[
  {label: 'Inicio',link:'/', clase: "nav-link"},
  {label: 'Proyectos',link:'/Proyectos', clase: "nav-link"},

]
}
