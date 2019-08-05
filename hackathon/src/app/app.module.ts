import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CountdownModule, Config } from 'ngx-countdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';
import { ButtonClickComponent } from './button-click/button-click.component';
import { TimerComponent } from './timer/timer.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'game', component: GameComponent},
  {path: 'button-click', component: ButtonClickComponent},
  {path: 'timer', component: TimerComponent}
];

function countdownConfigFactory(): Config {
  return { template: `$!h!:$!m!:$!s!` };
}

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HomeComponent,
    ButtonClickComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountdownModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
