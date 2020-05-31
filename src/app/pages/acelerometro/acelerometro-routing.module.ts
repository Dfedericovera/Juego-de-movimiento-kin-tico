import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcelerometroPage } from './acelerometro.page';

const routes: Routes = [
  {
    path: '',
    component: AcelerometroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcelerometroPageRoutingModule {}
