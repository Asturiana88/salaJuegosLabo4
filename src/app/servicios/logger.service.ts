import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore/';
import { Log } from '../clases/log';

@Injectable({
  providedIn: 'root'
})

export class LoggerService {

  rutaDeLaColeccion = '/logs';
  referenciaAlaColeccion: AngularFirestoreCollection<Log>;

  constructor(private bd: AngularFirestore) {
    this.referenciaAlaColeccion = bd.collection(this.rutaDeLaColeccion);
  }

  CreateLog(mensaje:Log):any{
    return this.referenciaAlaColeccion.add({...mensaje});
  }
}