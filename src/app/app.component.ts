import { Component } from '@angular/core';
import { AuthService } from './servicios/auth.service';
import { Subscription } from 'rxjs';
import { Usuario } from './modelos/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab4-tp1-gabriel-sanjurjo';
  shouldRun = true;
  logUser = null;
  public userAuth: Subscription;
  //public usuario: Usuario | null;
  constructor(public auth: AuthService, private router: Router){
    /*this.usuario = null;
    this.userAuth = this.auth.signedIn.subscribe(
      (user: Usuario) => { this.usuario = user }
    );*/
    this.userAuth = this.auth.signedIn.subscribe((user) => {
      if (user) {
         console.log(user);
         this.logUser = user; 
      } else {
          this.logUser = null;
          this.router.navigate([ 'login' ]);
      }
     });


  }

  signOut(){
    this.auth.signOut()
  }
}
