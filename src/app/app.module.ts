import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApodComponent } from './apod/apod.component';

//Import the pipe from node_modules
import { SafePipeModule } from 'safe-pipe';

import { NgApodConfig } from '../../config/ng-apod.config';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ApodComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SafePipeModule //Add the pipe to your list of imports
  ],
  providers: [
    NgApodConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }