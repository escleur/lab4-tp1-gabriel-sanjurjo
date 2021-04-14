import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Usuario } from '../modelos/usuario';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public signedIn: Observable<any>;

  constructor(public auth: AngularFireAuth) {
    this.signedIn = new Observable(
      (subscriber) => { this.auth.onAuthStateChanged(subscriber) }
    );
  }

  async signIn(email: string, password: string): Promise<any> {
      return await this.auth.signInWithEmailAndPassword(email, password);
  }

  async register(email: string, password: string): Promise<any>{
      return await this.auth.createUserWithEmailAndPassword(email, password);
  }

  async signOut(): Promise<any> {
      return await this.auth.signOut();
  }


}
