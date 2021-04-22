import { Component, OnInit } from '@angular/core';
import { Mensajes } from "../../../modelos/mensajes";
import { MensajesRealtimeService } from 'src/app/servicios/mensajes-realtime.service';

@Component({
  selector: 'app-chat-rt',
  templateUrl: './chat-rt.component.html',
  styleUrls: ['./chat-rt.component.css']
})
export class ChatRtComponent implements OnInit {
  nuevoMensaje: Mensajes;
  constructor(private servicioRealTime:MensajesRealtimeService) {
    this.nuevoMensaje = new Mensajes();
  }

  ngOnInit(): void {
    this.scrollToNew();
  }
  EnviarMensaje() {
    this.servicioRealTime.create(this.nuevoMensaje).then(()=>{
      console.log("se envio el mensaje RealTime");
      this.nuevoMensaje.mensaje = "";
      this.scrollToNew();
    });

  }

  scrollToNew(){
    let item = document.getElementById("scrolleable");
    if(item){
      item.scrollTop = item.scrollHeight;
    }

  }
}
