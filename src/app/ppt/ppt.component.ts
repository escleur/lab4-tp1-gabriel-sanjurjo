import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PptComponent implements OnInit {
  logUser: any = null;
  userEmail:any;
  manoSelect = "piedra"; //lo que selecciono el usuario
  manoPlayer = "piedra"; //lo que muestra en pantalla
  manoCompu = "piedra";
  hp:number = 50;
  updown = false;   //activa desactiva animacion arriba abajo
  botonesActivos = true;
  inteval:any;
  constructor( private router: Router ) {
   }

  ngOnInit(): void {
    if(localStorage.getItem('logUser')==null){
      this.router.navigate(['/login']);
    }else{
      let userString = localStorage.getItem('logUser');
      if(userString)
        this.logUser = JSON.parse(userString);
        this.userEmail = this.logUser.email;
    }
  }
  select(mano: string):void{
    if(this.botonesActivos){
      this.botonesActivos = false;
      this.manoSelect = mano;
      this.manoPlayer = 'piedra';
      this.manoCompu = 'piedra';
      this.updown=true;
      this.inteval = setInterval(()=>{
        clearInterval(this.inteval);

        switch(this.manoSelect){
          case 'piedra':
            this.manoPlayer = 'piedra';
            break;
          case 'papel':
            this.manoPlayer = 'papel';
            break;
          case 'tijeras':
            this.manoPlayer = 'tijeras';
            break;
        }
        this.manoCompu = this.getManoCompu();
        this.hp += this.hpGanador(this.manoCompu, this.manoPlayer);
        this.updown= false;
        if(this.hp <= 0 || this.hp >=100){
          this.inteval = setInterval(()=>{
            clearInterval(this.inteval);

           
            if(this.hp <=0) {
              alert("Haz perdido contra la computadora");
              this.hp = 50;
            }else{
              alert("Le haz ganado a la computadora");
              this.hp = 50;
            }

            this.botonesActivos = true;
          },2000)
        } else { //el juego continua
          this.botonesActivos = true;

        }
      }
      ,5000)
    }
  }
  getManoCompu():string{
    let eleccion = Math.floor(Math.random() * 3);
    let retorno = "";
    switch(eleccion){
      case 0:
        retorno = 'piedra';
        break;
      case 1:
        retorno = 'papel';
        break;
      case 2:
        retorno = 'tijeras';
        break;
    }
    return retorno;
  }

  hpGanador(compu:string, player: string):number{
    if(compu==player){
      return 0;
    }
    if((compu =='piedra' && player == 'papel') || (compu =='papel' && player == 'tijeras') || (compu =='tijeras' && player == 'piedra')){
      return 25; //gana el player
    }
    return -25; //gana la compu
  }
}
