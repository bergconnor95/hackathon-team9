import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UsMapModule } from 'angular-us-map';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';
import { ButtonClickComponent } from './button-click/button-click.component';
import { TimerComponent } from './timer/timer.component';
import { ImageComponent } from './image/image.component';
import { HttpClientService } from './service/http-client.service';
import { ModalComponent } from './modal/modal.component';
import { MapComponent } from './map/map.component';
import { BusinessGameComponent } from './business-game/business-game.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'game', component: GameComponent},
  {path: 'button-click', component: ButtonClickComponent},
  {path: 'timer', component: TimerComponent},
  {path: 'image', component: ImageComponent},
  {path: 'map', component: MapComponent},
  {path: 'business-game', component: BusinessGameComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HomeComponent,
    ButtonClickComponent,
    TimerComponent,
    ImageComponent,
    ModalComponent,
    MapComponent,
    BusinessGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    UsMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
