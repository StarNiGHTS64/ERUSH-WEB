import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TopGamingComponent } from './components/top-gaming/top-gaming.component';
import { TopEventComponent } from './components/top-event/top-event.component';
import { DetailsGamingComponent } from './components/details-gaming/details-gaming.component';
import { DetailsEventComponent } from './components/details-event/details-event.component';
import { ListGamingComponent } from './components/admin/list-gaming/list-gaming.component';
import { ListEventsComponent } from './components/admin/list-events/list-events.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent }, //Verificar Rol
  { path: 'topgaming', component: TopGamingComponent }, 
  { path: 'topevent', component: TopEventComponent },
  { path: 'gaming/:id', component: DetailsGamingComponent },
  { path: 'event/:id', component: DetailsEventComponent },
  { path: 'admin/list-gaming', component: ListGamingComponent, canActivate: [AuthGuard] }, //Verficar Rol
  { path: 'admin/list-events', component: ListEventsComponent, canActivate: [AuthGuard] }, //Verificar Rol
  { path: 'user/login', component: LoginComponent },
  { path: 'user/register', component: RegisterComponent },
  { path: 'user/profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
