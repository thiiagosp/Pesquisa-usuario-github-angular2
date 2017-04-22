import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
// import { HeaderComponent } from './components/header/header.component';


export const router: Routes = [
  { path: "", redirectTo: "main", pathMatch: "full"},
  { path: "main", component: MainComponent},
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
