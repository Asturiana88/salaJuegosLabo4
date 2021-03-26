import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajefireService } from 'src/app/servicios/mensajefire.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  item$: Observable<any[]>;
  constructor(firestore: MensajefireService) {
    this.item$ = firestore.ObtenerTodos().valueChanges();
  }

  ngOnInit(): void {
  }

}
