import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinijuegoPageRoutingModule } from './minijuego-routing.module';

import { MinijuegoPage } from './minijuego.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinijuegoPageRoutingModule
  ],
  declarations: [MinijuegoPage]
})
export class MinijuegoPageModule {}
