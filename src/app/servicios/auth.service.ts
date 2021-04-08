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

  async signIn(email: string, password: string) {
    try {
      if (!email || !password) throw new Error('Invalid email and/or password');
      await this.auth.signInWithEmailAndPassword(email, password);
      return true;
    } catch (error) {
      console.log('Sign in failed', error);
      return false;
    }
  }

  register(email: string, password: string): Observable<boolean> {
    try {
      if (!email || !password) throw new Error('Invalid email and/or password');
      this.auth.createUserWithEmailAndPassword(email, password);
      return of(true);
    } catch (error) {
      console.log('Sign in failed', error);
      return of(false);
    }
  }

  signOut(): Observable<boolean>{
    try{
      this.auth.signOut();
      return of(true);
    }catch(error){
      console.log('Sign out failed', error);
      return of(false);
    }
  }


}
