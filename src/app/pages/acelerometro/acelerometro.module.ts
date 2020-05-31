import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcelerometroPageRoutingModule } from './acelerometro-routing.module';

import { AcelerometroPage } from './acelerometro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcelerometroPageRoutingModule
  ],
  declarations: [AcelerometroPage]
})
export class AcelerometroPageModule {}
