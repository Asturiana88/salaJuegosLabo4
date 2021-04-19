import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent implements OnInit {

  email : string = "";

  constructor(
    public authService: AuthService,
  ) {
    const userData = localStorage.getItem('user')
    if (userData){ this.email = JSON.parse(userData).email }
    console.log(userData);
  }

  ngOnInit() {
  }

}
