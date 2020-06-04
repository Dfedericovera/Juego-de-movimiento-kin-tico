import { Component, OnInit, Input } from '@angular/core';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion/ngx'
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from "../../componentes/modal/modal.component";
import { timer } from 'rxjs';
import { JugadoresService } from "../../servicios/jugadores.service";
import { AuthenticationService } from "../../servicios/authentication.service";
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-juego',
  templateUrl: './juego.page.html',
  styleUrls: ['./juego.page.scss'],
})
export class JuegoPage implements OnInit {
  imgSeleccionada:string;

  //Definimos e iniciamos las variables necesarias 
  TAMAÑO_IMAGEN:number=100;
  TAMAÑO_IMAGEN_ALTO:number=200;
  y: any;
  x: any;
  controlY: any;
  controlX: any;
  velocidad: any;
  velocidadx:any;
  velocidadY:any;
  ax:any;
  ay:any;
  gano:any;
  tiempoDeJuego:any;
  estaJugando:boolean=false;
  //id de subscripcion y opciones
  aceleromotroSubscripcion:any;
  option:DeviceMotionAccelerometerOptions = 
  {
    frequency:50
  };

  constructor(
    private deviceMotion:DeviceMotion,
    private screenOrientation: ScreenOrientation,
    private route: ActivatedRoute,
    private modalController: ModalController,
    private jugadoresService:JugadoresService,
    private authService:AuthenticationService,
    public alertController: AlertController
    ) {
    
    this.controlX=1;
    this.controlY=1;
    this.velocidad=1;
  }

  ngOnInit() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY);
    this.route.queryParamMap.subscribe(params => {
      /* console.log(params.get("img")); */
      this.imgSeleccionada = params.get("img");
      /* this.imgSeleccionada = params.keys. */
    });
    
  }

  ionViewDidEnter() {
    /* console.log(document.getElementById("lienzo").offsetHeight,document.getElementById("lienzo").offsetWidth); */
    /* console.log(this.imgSeleccionada); */
    this.y=(document.getElementById("lienzo").offsetHeight-this.TAMAÑO_IMAGEN_ALTO)/2;
    this.x=(document.getElementById("lienzo").offsetWidth-this.TAMAÑO_IMAGEN)/2;
    
  }

  async MostrarModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: {
        'tiempo': this.msToTime(this.tiempoDeJuego)
      }
    });
    return await modal.present();
  }
  async alertSuperoRecord() {
    const alert = await this.alertController.create({
      translucent:true,
      cssClass: 'alert',
      header: 'Felicidades!',
      message: 'Superaste tu anterior record! Tu record actual es de <strong>'+this.msToTime(this.tiempoDeJuego)+'</strong>!!!',
      buttons: [ {
          text: 'Aceptar',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  async alertNoSuperoRecord(record) {
    const alert = await this.alertController.create({
      translucent:true,
      cssClass: 'alert',
      header: 'Bien hecho!',
      message: 'Conseguiste un tiempo de <strong>'+this.msToTime(this.tiempoDeJuego)+'</strong>. Pero tu re record sigue siendo '+record+'!!!',
      buttons: [ {
          text: 'Aceptar',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  async alertError(mensaje) {
    const alert = await this.alertController.create({
      translucent:true,
      cssClass: 'alert',
      header: 'Error de conexión',
      message: 'Hubo un problema con la red no pudimos guardar el ultimo juego: '+mensaje,
      buttons: [ {
          text: 'Aceptar',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  leerAceleracion(){
    this.aceleromotroSubscripcion = this.deviceMotion.watchAcceleration(this.option).subscribe((acc: DeviceMotionAccelerationData) =>
      {   
        this.velocidadx = acc.x*2;
        this.velocidadY = acc.y*2;
        this.ax = Math.round(acc.x)*2;   
        this.ay = Math.round(acc.y)*2;
        this.mover();
      });
  }

  //la función mover, que hace el idem con el objeto
  mover() {
    console.log(this.x, this.y);
    console.log(document.getElementById("lienzo").offsetWidth - this.TAMAÑO_IMAGEN);
    //Eje de las X
    if (this.velocidadx < 0) {
      //se mueve hacia la derecha
      this.x -= this.velocidadx;
    }
    else if(this.velocidadx==0){
      this.x = this.x;
    } else {
      //se mueve hacia la izquierda
      this.x -= this.velocidadx;
    }
    if (this.x <= 0) {
      this.controlX = 1;
      this.x = 0;
      console.log("choco izquierda");
      this.detener();
    }
    else if (this.x >= document.getElementById("lienzo").offsetWidth - this.TAMAÑO_IMAGEN) {
      // Esto significa que si es mayor o igual a el ancho que tiene el lienzo menos el tamaño de la imagen se le da un nuevo valor a this.x
      this.controlX = 0;  
      this.x = document.getElementById("lienzo").offsetWidth - this.TAMAÑO_IMAGEN;
      console.log("choco derecha");
      this.detener();
    }

    console.log(this.x, this.y);


    //Eje de las Y 
    if (this.velocidadY < 0) {
      this.y += this.velocidadY;
    }else if(this.velocidadY==0){
      this.y = this.y;
    } else {
      this.y += this.velocidadY;
    }
    if (this.y <= 0) {
      //choco
      console.log("choco arriba");
      this.controlY = 1;
      this.y = 0;
      this.detener();
    } else if (this.y >= document.getElementById("lienzo").offsetHeight - this.TAMAÑO_IMAGEN_ALTO) {
      console.log("choco abajo");
      //choco
      // Esto significa que si es mayor o igual a la altura que tiene el lienzo menos el tamaño de la imagen se le dará un nuevo valor a y
      this.controlY = 0;
      this.y = document.getElementById("lienzo").offsetHeight - this.TAMAÑO_IMAGEN_ALTO;
      this.detener();
    }

    console.log(this.x, this.y);
    //movemos la imagen en el eje x e y asignando un valor en px
    document.getElementById("imagen").style.left = this.x + "px";
    document.getElementById("imagen").style.top = this.y + "px";
  }

  comenzar() {
    //girar
    /* document.getElementById("imagen").className = "gira"; */
    //mover
    this.estaJugando=true;
    this.y=(document.getElementById("lienzo").offsetHeight-this.TAMAÑO_IMAGEN_ALTO)/2;
    this.x=(document.getElementById("lienzo").offsetWidth-this.TAMAÑO_IMAGEN)/2;
    this.tomarTiempo();
    this.leerAceleracion();

    /* setInterval(this.mover, 1000); */
  }
  tomarTiempo(){
    this.tiempoDeJuego = Date.now();
  }
  //SUCEDE CUANDO EL PERSONAJE CHOCA, SE GUARDA EL TIEMPO
  detener(){
    this.estaJugando=false;
    this.tiempoDeJuego =  Date.now()- this.tiempoDeJuego;
    this.guardarDatos();    
    this.aceleromotroSubscripcion.unsubcribe();
    
  }
  guardarDatos(){
    this.jugadoresService.getUsuarios().subscribe(data=>{
      data.map(user=>{
        //ENCUENTRO AL USUARIO Y VERIFICO QUE EL SEA EL MEJOR PUNTAJE DE LO CONTRARIO NO LO GUARDO
        if(user.correo == this.authService.userData["email"] && user.mejorTiempo < this.tiempoDeJuego){
          this.jugadoresService.modificarUsuario(user.correo,this.tiempoDeJuego).then(data=>{
            //mostrar que supero su merjor puntaje
            this.alertSuperoRecord();
          }).catch(error=>{
            this.alertError(error.message);            
          })
        }
        else{
          //mostrar que no supero su mejor puntaje
          this.alertNoSuperoRecord(user.mejorTiempo);
        }
      })
    })
    
  }
  msToTime(s) {
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    /* var mins = s % 60; */
  
    return secs + '.' + ms;
  }

  aparece(){
    this.estaJugando=!this.estaJugando;
  }

}
