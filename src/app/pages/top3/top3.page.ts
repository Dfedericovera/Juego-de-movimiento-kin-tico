import { Component, OnInit } from '@angular/core';
import { JugadoresService } from "../../servicios/jugadores.service";
@Component({
  selector: 'app-top3',
  templateUrl: './top3.page.html',
  styleUrls: ['./top3.page.scss'],
})
export class Top3Page implements OnInit {
  listadoTop3:Array<any>;

  constructor(
    private jugadoresService:JugadoresService
    ) {
      this.jugadoresService.getUsuarios().subscribe(data=>{
        
        this.listadoTop3 = data.map(user=>{
          return user
        })
        this.listadoTop3= this.listadoTop3.slice(0,3);
        
      })
   }

  ngOnInit() {
  }

}
