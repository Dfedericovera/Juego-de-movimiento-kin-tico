import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'juego',
    loadChildren: () => import('./pages/juego/juego.module').then( m => m.JuegoPageModule)
  },
  {
    path: 'acelerometro',
    loadChildren: () => import('./pages/acelerometro/acelerometro.module').then( m => m.AcelerometroPageModule)
  },
  {
    path: 'top3',
    loadChildren: () => import('./pages/top3/top3.module').then( m => m.Top3PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
