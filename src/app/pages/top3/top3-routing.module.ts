import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Top3Page } from './top3.page';

const routes: Routes = [
  {
    path: '',
    component: Top3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Top3PageRoutingModule {}
