import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore/';
import { Mensaje } from '../clases/mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajefireService {

  rutaDeLaColeccion = '/mensajeFire';
  referenciaAlaColeccion: AngularFirestoreCollection<Mensaje>;

  constructor(private bd: AngularFirestore) {
    this.referenciaAlaColeccion = bd.collection(this.rutaDeLaColeccion);
  }

  Crear(mensaje:Mensaje, juego:string):any
  {
    const referenciaAlaColeccion = this.bd.collection(`/${juego}-chat/`);
    return referenciaAlaColeccion.add({...mensaje});
  }

  ObtenerTodos(juego:string): any
  {
    const referenciaAlaColeccion: AngularFirestoreCollection<Mensaje> = this.bd.collection(`/${juego}-chat/`, ref => ref.orderBy('emision'));
    return referenciaAlaColeccion
  }

  BorrarMensaje(id:any):Promise<void>
  {
   return this.referenciaAlaColeccion.doc(id).delete();

  }

  ModificarMensaje(id:any, datos:any):Promise<void>
  {
   return this.referenciaAlaColeccion.doc(id).update(datos);

  }
}
