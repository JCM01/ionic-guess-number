import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinijuegoPage } from './minijuego.page';

const routes: Routes = [
  {
    path: '',
    component: MinijuegoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinijuegoPageRoutingModule {}
