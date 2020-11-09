import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { ModalComponent } from "../componentes/modal/modal.component";
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../servicios/authentication.service';
import { FCM } from '@ionic-native/fcm/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit
{

  selecciono: boolean = true;
  imgSeleccionada: any = "../../assets/images/DCmarvel.jpg";

  constructor(private authService: AuthenticationService,
    private fcm:FCM
  ) { }

  ngOnInit(): void
  {
    this.fcm.getToken().then(token=>{
      console.log(token);
    })
  }

  seleccionarImagen(select)
  {
    this.imgSeleccionada = select.detail.value;
    this.selecciono = false;
  }
  onlogout()
  {
    this.authService.SignOut();
  }

}