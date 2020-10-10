import { Component } from '@angular/core';
import { ModalController,PopoverController } from '@ionic/angular';
import { ModalComponent } from "../componentes/modal/modal.component";
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../servicios/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  selecciono: boolean = true;
  imgSeleccionada: any = "../../assets/images/DCmarvel.jpg";

  constructor(private authService:AuthenticationService
    ) { }

  seleccionarImagen(select) {
    this.imgSeleccionada = select.detail.value;
    this.selecciono = false;
  }
  onlogout(){
    this.authService.SignOut();
  }

}