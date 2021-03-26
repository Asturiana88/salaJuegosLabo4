import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/clases/mensaje';
import { MensajefireService } from 'src/app/servicios/mensajefire.service';
import { MensajerealService } from 'src/app/servicios/mensajereal.service';
import { UsuariosService } from './../../servicios/usuario.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensaje: Mensaje;
  
  constructor(private MiServicio: MensajefireService,private MiServicioReal: MensajerealService, private MiServicioUsuario: UsuariosService) { this.mensaje = new Mensaje(); }
  

   Enviar() {
    console.log(this.MiServicioReal);
// falta algo aca
    this.mensaje.usuario = this.MiServicioUsuario.usuarioVigente;

     this.MiServicio.Crear(this.mensaje).then(() => {

       console.log('se envio el msj FIRE');

     });

    this.MiServicioReal.CrearUno(this.mensaje).then(() => {

       console.log('se envio el msj REAL');

    });

   }

  ngOnInit(): void {
  }

}
