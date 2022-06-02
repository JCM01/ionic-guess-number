import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minijuego',
  templateUrl: './minijuego.page.html',
  styleUrls: ['./minijuego.page.scss'],
})
export class MinijuegoPage implements OnInit {
  num: number;
  mayorMenor = '...';
  numSecret: number = this.numAleatorio(0, 100);
  constructor() { }
  numAleatorio(a, b) {
    return Math.round(Math.random() * (b - a) + parseInt(a, 10));
  }

  compruebaNumero() {
    if (this.num) {
      if (this.numSecret < this.num) {
        this.mayorMenor = 'less than';
      } else if (this.numSecret > this.num) {
        this.mayorMenor = 'more than';
      } else {
        this.mayorMenor = '';
      }
    }
  }

  reinicia(){
    this.num = null;
    this.mayorMenor = '...';
    this.numSecret = this.numAleatorio(0,100);
  }

  ngOnInit(){
    
  }
}
