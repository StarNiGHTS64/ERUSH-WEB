import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListGamingComponent } from './components/admin/list-gaming/list-gaming.component';
import { ListEventsComponent } from './components/admin/list-events/list-events.component';
import { ListUsersComponent } from './components/admin/list-users/list-users.component';
import { DetailsGamingComponent } from './components/details-gaming/details-gaming.component';
import { DetailsEventComponent } from './components/details-event/details-event.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/home/home.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalGamingComponent } from './components/modal-gaming/modal-gaming.component';
import { ModalEventComponent } from './components/modal-event/modal-event.component';
import { ModalUserComponent } from './components/modal-user/modal-user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TopGamingComponent } from './components/top-gaming/top-gaming.component';
import { TopEventComponent } from './components/top-event/top-event.component';
import { LoginComponent } from './components/users/login/login.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { RegisterComponent } from './components/users/register/register.component';
import { Page404Component } from './components/page404/page404.component';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    ListGamingComponent,
    ListEventsComponent,
    ListUsersComponent,
    DetailsGamingComponent,
    DetailsEventComponent,
    HeroComponent,
    HomeComponent,
    ModalComponent,
    ModalGamingComponent,
    ModalEventComponent,
    ModalUserComponent,
    NavbarComponent,
    TopGamingComponent,
    TopEventComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    Page404Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
