import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UsMapModule } from 'angular-us-map';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'game', component: GameComponent},
  {path: 'map', component: MapComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HomeComponent,
    ModalComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    UsMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
