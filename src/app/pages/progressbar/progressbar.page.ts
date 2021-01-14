import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.page.html',
  styleUrls: ['./progressbar.page.scss'],
})
export class ProgressbarPage implements OnInit {

  porcentaje = 0.5;

  constructor() { }

  ngOnInit() {
  }

  cambiarRango(event) {
    this.porcentaje = event.detail.value * 0.01;
  }

}
