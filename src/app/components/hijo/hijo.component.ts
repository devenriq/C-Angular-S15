import { Component } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
})
export class HijoComponent {
  textoHijo = 'Cambiar el texto del hijo'

  cambiarTextoHijo(){
    this.textoHijo = 'texto cambiado DESDE el HIJO'
  }
}
