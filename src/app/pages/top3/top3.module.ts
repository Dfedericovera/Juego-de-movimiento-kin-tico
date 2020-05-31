import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Top3PageRoutingModule } from './top3-routing.module';

import { Top3Page } from './top3.page';
import { TablajugadoresComponent } from "../../componentes/tablajugadores/tablajugadores.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Top3PageRoutingModule
  ],
  declarations: [
    Top3Page,
    TablajugadoresComponent,
  ]
})
export class Top3PageModule {}
