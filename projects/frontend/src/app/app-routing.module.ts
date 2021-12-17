import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AuthenticationGuard} from './guard/authentication.guard';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import {LoginComponent} from './components/login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent },
  {path: 'home', component: HomeComponent, canActivate: [AuthenticationGuard]},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
