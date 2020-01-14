import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubmitFormComponent } from './submit-form/submit-form.component';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"register", component:SubmitFormComponent},
  {path:"users", component:RegisteredUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
