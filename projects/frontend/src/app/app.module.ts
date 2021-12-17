import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GraphQLModule } from './graphql.module';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './components/error/error.component';
import {LoginComponent} from './components/login/login.component';
import { FormatDatePipe } from './pipes/format.date.pipe';
import { AppRoutingModule } from './app-routing.module';
import {MomentModule} from 'angular2-moment';
import {AuthenticationGuard} from "./guard/authentication.guard";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticlesComponent,
    HomeComponent,
    FooterComponent,
    ErrorComponent,
    FormatDatePipe,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    GraphQLModule,
    FormsModule,
    AppRoutingModule,
    MomentModule,
  ],
  providers: [DatePipe, AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
