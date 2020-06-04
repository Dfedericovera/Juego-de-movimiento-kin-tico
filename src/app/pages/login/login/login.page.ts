import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private platform:Platform,
    public alertController: AlertController
  ) { }

  ngOnInit() {
   this.backButtonEvent();
  }

  backButtonEvent(){
    this.platform.backButton.subscribe(() => { 
      
      this.presentAlertConfirm();
    }
    );
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Decea salir de la aplicacion?',
      message: 'Hasta luego...',
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {            
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'SI',
          handler: () => {
            navigator["app"].exitApp();
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

}
