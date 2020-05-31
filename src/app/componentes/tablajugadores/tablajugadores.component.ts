import { Component, OnInit, Input } from '@angular/core';
import { JugadoresService } from "../../servicios/jugadores.service";
@Component({
  selector: 'app-tablajugadores',
  templateUrl: './tablajugadores.component.html',
  styleUrls: ['./tablajugadores.component.scss'],
})
export class TablajugadoresComponent implements OnInit {
  @Input() listado: Array<any>=[];

  constructor(
    private jugadoresService:JugadoresService,
  ) { }

  ngOnInit(): void {    
    this.listado = this.jugadoresService.traerTodos("TOP3");
  }
  detalle(actor){
    /* console.log(actor); */
  }
  msToTime(s) {
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    /* var mins = s % 60; */
  
    return secs + '.' + ms;
  }

}
