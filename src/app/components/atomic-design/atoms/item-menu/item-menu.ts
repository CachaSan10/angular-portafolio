import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-item-menu',
  imports: [RouterLink, NgClass],
  templateUrl: './item-menu.html',
  styleUrl: './item-menu.css'
})
export class ItemMenu {
  @Input() label:string="";
  @Input() link:string="";
  @Input() clase:string="";
}
