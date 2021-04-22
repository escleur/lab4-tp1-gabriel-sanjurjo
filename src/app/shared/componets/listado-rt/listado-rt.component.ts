import { Component, OnInit } from '@angular/core';
import { Mensajes } from "./../../../modelos/mensajes"
import { MensajesRealtimeService } from 'src/app/servicios/mensajes-realtime.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-listado-rt',
  templateUrl: './listado-rt.component.html',
  styleUrls: ['./listado-rt.component.css']
})
export class ListadoRtComponent implements OnInit {

  listadoMensajes?: any[];
  mensajeActual?: Mensajes;
  currentIndex = -1;
  title = '';
  constructor(private servicioRealTime:MensajesRealtimeService) { }

  ngOnInit(): void {
    this.cargarMensajes();
    
  }

  cargarMensajes(): void {
    this.servicioRealTime.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.listadoMensajes = data;
    });

  }

}
