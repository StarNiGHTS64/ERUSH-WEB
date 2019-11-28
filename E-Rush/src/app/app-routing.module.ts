import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { OffersComponent } from "./components/offers/offers.component";
import { DetailsGamingComponent } from "./components/details-gaming/details-gaming.component";
import { ListGamingsComponent } from "./components/admin/list-gamings/list-gamings.component";
import { LoginComponent } from "./components/users/login/login.component";
import { RegisterComponent } from "./components/users/register/register.component";
import { ProfileComponent } from "./components/users/profile/profile.component";
import { Page404Component } from "./components/page404/page404.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "offers", component: OffersComponent }, //TODO: only user auth
  { path: "gaming/:id", component: DetailsGamingComponent },
  { path: "admin/list-gamings", component: ListGamingsComponent }, //TODO: only user auth
  { path: "user/login", component: LoginComponent },
  { path: "user/register", component: RegisterComponent },
  { path: "user/profile", component: ProfileComponent }, //TODO: only user auth
  { path: "**", component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
