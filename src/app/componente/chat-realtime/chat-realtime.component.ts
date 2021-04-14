import { Component, OnInit } from '@angular/core';
import { Mensajes } from "../../modelos/mensajes";
import { MensajesRealtimeService } from 'src/app/servicios/mensajes-realtime.service';

@Component({
  selector: 'app-chat-realtime',
  templateUrl: './chat-realtime.component.html',
  styleUrls: ['./chat-realtime.component.css']
})
export class ChatRealtimeComponent implements OnInit {
  nuevoMensaje: Mensajes;
  constructor(private servicioRealTime:MensajesRealtimeService) {
    this.nuevoMensaje = new Mensajes();
  }

  ngOnInit(): void {
  }
  EnviarMensaje() {
    this.servicioRealTime.create(this.nuevoMensaje).then(()=>{
      console.log("se envio el mensaje RealTime");
    });

  }
}
