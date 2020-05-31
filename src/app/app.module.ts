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
    ],
  providers: [
    StatusBar,
    SplashScreen,DeviceMotion,ScreenOrientation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
