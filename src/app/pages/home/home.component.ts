import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  textoPadre: string = 'Soy el texto del padre'

  cambiarTextoPadre(){
    this.textoPadre = 'Cambié el texto DESDE el padre'
  }
}
