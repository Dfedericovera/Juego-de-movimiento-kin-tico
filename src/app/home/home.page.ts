import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  selecciono:boolean=true;
  imgSeleccionada:any= "../../assets/images/DCmarvel.jpg";

  constructor() {}

  seleccionarImagen(select){
    this.imgSeleccionada = select.detail.value;
    this.selecciono=false;
  }

  



}
