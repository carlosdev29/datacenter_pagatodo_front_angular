import { Component, OnInit } from '@angular/core';
import { Recarga } from '../recarga';
import { RecargasserviceService } from '../service/recargasservice.service';


@Component({
  selector: 'app-formrecargas',
  templateUrl: './formrecargas.component.html',
  styleUrls: ['./formrecargas.component.css']
})
export class FormrecargasComponent implements OnInit {

  prueba:string = "Dulce Isabella Sanz";
  listaRecargas:Recarga[];

  constructor(private apiRecarga:RecargasserviceService){

  }

  ngOnInit(): void {
    this.consultListRecargas();
  }


  private consultListRecargas(){
    this.apiRecarga.consultarListaRecargas().subscribe(dataRecarga => {
      this.listaRecargas = dataRecarga;
    })
  }

}
