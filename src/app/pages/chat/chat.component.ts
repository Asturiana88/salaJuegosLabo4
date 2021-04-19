import { Component, Input, OnInit } from '@angular/core';
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

  @Input()
  get juego(): string { return this._juego; }
  set juego(juego: string) {
    this._juego = (juego && juego.trim()) || '<no name set>';
  }
  private _juego = '';
  mensajes$: any = []

  constructor(
    private MiServicio: MensajefireService,
    // private MiServicioReal: MensajerealService,
    private MiServicioUsuario: UsuariosService
  ) {
     this.mensaje = new Mensaje();
     this.mensajes$ = this.MiServicio.ObtenerTodos(this.juego).valueChanges()
    }


   Enviar() {
    var m = new Date();
    var datetime = m.getUTCFullYear() + "/" +
      ("0" + (m.getUTCMonth()+1)).slice(-2) + "/" +
      ("0" + m.getUTCDate()).slice(-2) + " " +
      ("0" + m.getUTCHours()).slice(-2) + ":" +
      ("0" + m.getUTCMinutes()).slice(-2) + ":" +
      ("0" + m.getUTCSeconds()).slice(-2);;

    this.mensaje.emision = datetime
    this.mensaje.usuario = this.MiServicioUsuario.getUser();
    this.MiServicio.Crear(this.mensaje,this.juego).then(() => {
      this.mensajes$ = this.MiServicio.ObtenerTodos(this.juego).valueChanges()
    });
   }

  ngOnInit(): void {
  }

}
