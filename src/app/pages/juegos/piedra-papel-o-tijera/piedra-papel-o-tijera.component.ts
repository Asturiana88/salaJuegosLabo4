import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piedra-papel-o-tijera',
  templateUrl: './piedra-papel-o-tijera.component.html',
  styleUrls: ['./piedra-papel-o-tijera.component.css']
})
export class PiedraPapelOTijeraComponent implements OnInit {

  juego: string = 'piedra-papel-tijera'
  constructor() { }

  ngOnInit() {
  }

}
