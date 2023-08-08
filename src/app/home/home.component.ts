import { Component,AfterViewInit } from '@angular/core';
import Typed from 'typed.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ngAfterViewInit() {
    const options = {
      strings: ['Full-Stack Developer', 'Web Developer', 'junior programmer'], // Array de textos a mostrar
      typeSpeed: 50, // Velocidad de escritura en milisegundos
      loop: true // Si se debe repetir el ciclo de animación
    };
  
    const typed = new Typed('.typed-text', options); // Selector del elemento HTML donde se mostrará el texto animado
  }
  
}
