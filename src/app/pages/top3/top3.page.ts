import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/interface/user';
import { JugadoresService } from "../../servicios/jugadores.service";
@Component({
  selector: 'app-top3',
  templateUrl: './top3.page.html',
  styleUrls: ['./top3.page.scss'],
})
export class Top3Page implements OnInit {
  listadoTop3:Array<user>;

  constructor(
    private jugadoresService:JugadoresService
    ) {      

   }
   ionViewDidLoad() {
    console.log("I'm alive!");
  }

  ngOnInit() {
  /*   this.jugadoresService.getUsuarios().subscribe(data=>{
        
      this.listadoTop3 = data.map(user=>{
        user.mejorTiempo =  this.msToTime(user.mejorTiempo);
        return user
      })
      this.listadoTop3.sort(this.compararTiempos);
      this.listadoTop3= this.listadoTop3.slice(0,3);
      
    }) */
    this.jugadoresService.getUsuarios().subscribe(data=>{
      
      this.listadoTop3 =data;
      this.listadoTop3.sort(this.compararTiempos);
      this.listadoTop3= this.listadoTop3.slice(0,3);
      this.listadoTop3.forEach(user=>{
        user.mejorTiempo = this.msToTime(user.mejorTiempo);
      })
    })
  }
  

  compararTiempos(a:user, b:user) {
    if (a.mejorTiempo > b.mejorTiempo) {
      return -1;
    }
    if (a.mejorTiempo < b.mejorTiempo ) {
      return 1;
    }
    // a debe ser igual b
    return 0;
  }

  msToTime(s:number) {
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
  
    return secs;
  }



}
