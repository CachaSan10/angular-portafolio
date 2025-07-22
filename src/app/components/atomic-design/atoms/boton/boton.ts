import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  imports: [NgClass],
  templateUrl: './boton.html',
  styleUrl: './boton.css'
})
export class Boton {
  @Input() label:string = '';
  @Input() type: 'primary' | 'secondary' | 'danger' = 'primary';
  @Output() onClick = new EventEmitter<void>();
}
