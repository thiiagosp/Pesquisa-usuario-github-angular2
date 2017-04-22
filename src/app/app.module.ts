import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from "./app.router";

import { AppComponent } from './app.component';
// import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';

import { UsersService } from './services/users.service';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    MainComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
