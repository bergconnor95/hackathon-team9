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
  inter;

  @ViewChild(MapComponent)
  mapComp: MapComponent;
  gumUnlocked: boolean = false;
  musicUnlocked: boolean = false;
  happyMealUnlocked: boolean = false;
  cubeUnlocked: boolean = false;
  movieUnlocked: boolean = false;
  dotUnlocked: boolean = false;
  concertUnlocked: boolean = false;

  // modalUnlocked: boolean = false;

  moneyEarned = 0.00;
  itemToDisplay = 'Gum';
  cost = 0;
  height = 10;
  boxMargin = 0;

  constructor(private modalService: ModalService,
              private route:Router) {}

  ngOnInit() {

    this.route.routerState.root.queryParams.subscribe(
      params => this.rate = params['rate']
    );

    // const secondsCounter = interval(1000);
    const mytimeout = interval(1000);
    // const newCounter = secondsCounter.pipe(map(x => this.rate));

    // this.inter = newCounter.subscribe(x => this.moneyEarned += ((Number(x) / 60)));
    // mytimeout.subscribe(n => {
    //   if ((this.timeout++) > 1) {
    //   } else {
    //
    //     this.expandBar();
    //   }
    // });
  }

  @HostListener('window:keyup', ['$event'])
  KeyEventsPlugin(event: KeyboardEvent) {
    console.log(event);
    if (event.keyCode === KEY_CODE.SPACE) {
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
  expandBar() {;
    this.moneyEarned += (this.rate/60);
    this.height += this.moneyEarned;
    document.getElementById('progressBar').style.height = this.height+'px';
    //this.lowerView();
    if(this.moneyEarned >= 50 && !this.gumUnlocked) {
      // this.concertUnlocked = true;
      document.getElementById("situation").innerText="It will cost 600 dollars to set up a website. But you could always just sell in person!";
      this.cost=600;
      document.getElementById("choiceModal").style.display="block";
      document.getElementById("eventseven").style.backgroundColor="none";
      this.gumUnlocked= true;

      // document.getElementById("concert").style.visibility="visible";
    }else if(this.moneyEarned >= 25.00 && !this.concertUnlocked) {

      document.getElementById("situation").innerText=""
      document.getElementById("choiceModal").style.display="block";
      document.getElementById("eventsix").style.backgroundColor="none";
      this.concertUnlocked = true;
    }else if(this.moneyEarned >= 13.00 && !this.dotUnlocked) {

      document.getElementById("situation").innerText=""
      document.getElementById("choiceModal").style.display="block";
      document.getElementById("eventfive").style.backgroundColor="none";
      this.dotUnlocked= true;
    }else if(this.moneyEarned >= 5.00 && this.movieUnlocked) {

      document.getElementById("situation").innerText=""
      document.getElementById("choiceModal").style.display="block";
      document.getElementById("eventfour").style.backgroundColor="none";
      this.movieUnlocked= true;
    }else if(this.moneyEarned >= 3.00 && this.cubeUnlocked) {

      document.getElementById("situation").innerText=""
      document.getElementById("choiceModal").style.display="block";
      document.getElementById("eventthree").style.backgroundColor="none";
      this.cubeUnlocked = true;
    }else if(this.moneyEarned >= 0.99 && !this.happyMealUnlocked) {

      document.getElementById("situation").innerText=""
      document.getElementById("choiceModal").style.display="block";
      document.getElementById("eventtwo").style.backgroundColor="none";
      this.happyMealUnlocked= true;
    }else if(this.moneyEarned >= 0.25 && !this.musicUnlocked) {

      document.getElementById("situation").innerText=""
      document.getElementById("choiceModal").style.display="block";
      document.getElementById("eventone").style.backgroundColor="none";
      this.musicUnlocked= true;
    }
  }
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    this.expandBar()
    console.log("keybrodkafjkd")
  }
  spendItNow(cost){
    this.moneyEarned-=cost;
    document.getElementById("choiceModal").style.display="none";
  }
  saveItNow(){
    this.rate=this.rate*.8;
    document.getElementById("choiceModal").style.display="none";
  }
  startGame(){

  }
  goHome() {
    this.route.navigate(['home']);
  }
}
