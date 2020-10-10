import { Component, OnInit, Input } from '@angular/core';
import { JugadoresService } from "../../servicios/jugadores.service";
import { user } from "../../interface/user";
@Component({
  selector: 'app-tablajugadores',
  templateUrl: './tablajugadores.component.html',
  styleUrls: ['./tablajugadores.component.scss'],
})
export class TablajugadoresComponent implements OnInit {
  @Input() listado: Array<user>;

  constructor(
  ) { }

  ngOnInit(): void {
    
  }/* 


  ionViewDidEnter(){
    console.log("enter");
    setTimeout(t => {
      if (this.listado) {
        this.listado.forEach(user => {
          console.log(user);
          user.mejorTiempo = this.msToTime(user.mejorTiempo);
        })
      }
    }, 2000)
  } */

  msToTime(s:number) {
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;

    return secs;
  }

}
