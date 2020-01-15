import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"register", component:RegisterComponent},
  {path:"users", component:RegisteredUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
