import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afsAuth: AngularFireAuth) { }

  registerUser(){}
  loginEmailUser(){
    
  }
  loginFacebookUser(){
    this.afsAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }
  loginGoogleUser(){
    this.afsAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logoutUser(){}

  isAuth(){
    return this.afsAuth.authState.pipe(map(auth => auth));
  }

}
