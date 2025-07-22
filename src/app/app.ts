import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/atomic-design/templates/header/header";
import { Main } from "./components/atomic-design/templates/main/main";

@Component({
  selector: 'app-root',
  imports: [Header, Main],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portafolio-atomic-design');
}
