import { Component } from '@angular/core';

@Component({
  selector: 'app-form-save-recargas',
  templateUrl: './form-save-recargas.component.html',
  styleUrls: ['./form-save-recargas.component.css']
})
export class FormSaveRecargasComponent {

  nombreAsesor:string="Nombre del Asesor:";
  operador:string="Operador( Claro, Movistar, Tigo etc...):";
  cantRec:string="Cantidad de Recargas:";
  valRec:string="Valor de la Recarga:";


}
