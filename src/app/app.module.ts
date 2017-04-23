import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from "./app.router";

import { AppComponent } from './app.component';
// import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';

import { UserComponent } from './components/user/user.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { UsersService } from './services/users.service';
import { PagerService } from './services/pager.service';

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    MainComponent,
    UserComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [UsersService, PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
