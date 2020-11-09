import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion/ngx'
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

import { ModalComponent } from "./componentes/modal/modal.component";
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FCM } from '@ionic-native/fcm/ngx';



@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ],
  entryComponents: [
    ModalComponent,
  ],
  imports: [
    BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,
      FontAwesomeModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFireAuthModule,
      AngularFireDatabaseModule,
      AngularFirestoreModule
    ],
  providers: [
    FCM,
    StatusBar,
    SplashScreen,DeviceMotion,ScreenOrientation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
