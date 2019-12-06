import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private storage: AngularFireStorage) { }
  public email: string = '';
  public password: string = '';

  ngOnInit() {
  }
  onUpload(e){
    //console.log('Subir:', e.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = 'upload/imagen.png';
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    
  }
  onAddUser(){
    this.authService.registerUser(this.email, this.password)
    .then((res)=> {
      this.router.navigate(['admin/list-gaming']);
    }).catch(err => console.log('err', err.message));
  }

  onLoginGoogle(): void{
    //this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    this.authService.loginGoogleUser()
    .then((res) => {
      console.log('resUser', res);
      this.onLoginRedirect();
    }).catch(err => console.log('err', err.message));
    
  }

  onLoginFacebook(): void{
    this.authService.loginFacebookUser()
    .then( (res) => {
      this.onLoginRedirect();
    }).catch( err => console.log('err', err.message));
  }

  onLoginRedirect(): void{
    this.router.navigate(['admin/list-gaming']);
  }
}
