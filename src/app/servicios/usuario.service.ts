
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(public authService: AuthService,) {
  }

  getUser(){
    const userData = localStorage.getItem('user')
    if (userData){ return JSON.parse(userData).email }
  }

}