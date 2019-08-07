import { Component, OnInit, ViewChild, HostListener, Input, AfterViewInit, Host } from '@angular/core';
import { interval, timer } from 'rxjs';
import { ModalService } from '../services/modal.service';
import { map } from 'rxjs/operators';
import { MapComponent } from '../map/map.component';
import { KeyEventsPlugin } from '@angular/platform-browser/src/dom/events/key_events';
import { KEY_CODE } from '../button-click/button-click.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './business-game.component.html',
  styleUrls: ['./business-game.component.css']
})
export class BusinessGameComponent implements OnInit{

  unlocked: boolean = false;
  counter = 0;
  timeout = 0;
  amount = .25;
  rate = 0;
  cost = 0;
  tier=10;

  gumUnlocked: boolean = false;
  musicUnlocked: boolean = false;
  happyMealUnlocked: boolean = false;
  cubeUnlocked: boolean = false;
  movieUnlocked: boolean = false;
  dotUnlocked: boolean = false;
  concertUnlocked: boolean = false;

  // modalUnlocked: boolean = false;

  moneyEarned = 10;
  itemToDisplay = 'Gum';

  height = 10;
  boxMargin = 0;

  constructor(private modalService: ModalService,
              private router:Router) {}

  ngOnInit() {

    this.router.routerState.root.queryParams.subscribe(
      params => this.rate = params['rate']
    );
    this.router.routerState.root.queryParams.subscribe(
      params => this.moneyEarned = Number(params['earned'])
    );


    const mytimeout = interval(1000);
    mytimeout.subscribe(n => {
      if ((this.timeout++) > 1) {
      } else {
        this.expandBar();
      }
    });
  }

  @HostListener('window:keyup', ['$event'])
  KeyEventsPlugin(event: KeyboardEvent) {
    console.log(event);
    if (event.keyCode === KEY_CODE.SPACE) {
      this.counter += 1;
      this.timeout = 0;
    }

  }

  openModal() {
    console.log('I opened modal!');
    // document.getElementById("modal").style.opacity='1';
    document.getElementById("modal").style.display="block";
    // document.body.style.backgroundColor='gray';
  }

  keepPlaying(name: string) {
    document.getElementById(name+"Modal").style.display="none";
    this.gumUnlocked = true;
  }

  spendMoney(name:string) {
    document.getElementById(name+"Modal").style.display="none";
    console.log('spending my money and closing out now.');
    document.getElementById("spentModal").style.display="block";
  }

  // changeImage(id: string) {
  //   if(document.getElementById(id).src === 'happy-meal-sil.png') {
  //     document.getElementById('happy-meal').src == 'happy-meal.png'
  //   }
  // }
  lowerView(){
    // console.log("bro!")
    this.boxMargin += 10;
    document.getElementById('bigBox').style.marginTop = this.boxMargin+'px';
    document.getElementById("Lt2earn").style.marginTop = '-'+this.boxMargin+'px';
    document.getElementById("Rt2earn").style.marginTop = '-'+this.boxMargin+'px';
  }
  expandBar() {
    this.moneyEarned += this.tier*(this.rate/60);
    this.height += this.moneyEarned;
    document.getElementById('progressBar').style.height = this.height+'px';
    //this.lowerView();
    if(this.moneyEarned >= 500 && !this.concertUnlocked) {
      this.concertUnlocked = true;
      document.getElementById("situation").innerText="It will cost money to learn about stocks. But you could always not!";
      this.cost=600;
      document.getElementById("choiceModal").style.display="block";
      document.getElementById("eventseven").style.visibility="visible";
      // document.getElementById("concert").style.visibility="visible";
    }else if(this.moneyEarned >= 250 && !this.dotUnlocked) {
      this.dotUnlocked = true;
      document.getElementById("situation").innerText="It will cost money to set up a new office. But you could just work off your couch!"
      document.getElementById("choiceModal").style.display="block";
      document.getElementById("eventsix").style.visibility="visible";
    }else if(this.moneyEarned >= 130 && !this.movieUnlocked) {
      this.movieUnlocked;
      document.getElementById("situation").innerText="It will cost money to hire multiple real estate agents. But you could just wing it!!"
      document.getElementById("choiceModal").style.display="block";
      document.getElementById("eventfive").style.visibility="visible";
    }else if(this.moneyEarned >= 50 && !this.cubeUnlocked) {
      this.cubeUnlocked = true;
      document.getElementById("situation").innerText="It will cost money to hire a real estate agent. But you could just wing it!"
      document.getElementById("choiceModal").style.display="block";
      document.getElementById("eventfour").style.visibility="visible";
    }else if(this.moneyEarned >= 30 && !this.happyMealUnlocked) {
      this.happyMealUnlocked = true;
      document.getElementById("situation").innerText="It will cost money to search for employees. But you could just hire friends!"
      document.getElementById("choiceModal").style.display="block";
      document.getElementById("eventthree").style.visibility="visible";
    }else if(this.moneyEarned >= 9 && !this.musicUnlocked) {
      this.musicUnlocked = true;
      document.getElementById("situation").innerText="It will cost money to set up a website. But you could just sell in person!"
      document.getElementById("choiceModal").style.display="block";
      document.getElementById("eventtwo").style.visibility="visible";
    }else if(this.moneyEarned >= 5 && !this.gumUnlocked) {
      this.gumUnlocked = true;
      document.getElementById("situation").innerText="It will cost money to set up a home office. But you could just work off your couch!"
      document.getElementById("choiceModal").style.display="block";
      document.getElementById("eventone").style.visibility="visible";
    }
  }

  spendItNow(cost){
    this.moneyEarned-=this.moneyEarned/Math.floor(Math.random() * 6) + 1;
    document.getElementById("choiceModal").style.display="none";
  }
  saveItNow(){
    this.rate=this.rate*.8;
    document.getElementById("choiceModal").style.display="none";
  }
  startGame(){

  }
  goHome() {
    this.router.navigate(['home']);
  }
}
