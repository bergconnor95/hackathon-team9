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
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit{

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

  height = 10;

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

  expandBar() {
    this.moneyEarned += (this.rate / 60);
    this.height += this.moneyEarned;
    document.getElementById('progressBar').style.height = this.height+'px';

    if(this.moneyEarned >= 50) {
      this.concertUnlocked = true;
      document.getElementById("concertModal").style.display="block";
    }else if(this.moneyEarned >= 25.00 && this.moneyEarned <= 25.04) {
      this.dotUnlocked = true;
      document.getElementById("dotModal").style.display="block";
    }else if(this.moneyEarned >= 13.00 && this.moneyEarned <= 13.04) {
      this.movieUnlocked = true;
      document.getElementById("movieModal").style.display="block";
    }else if(this.moneyEarned >= 5.00 && this.moneyEarned <=5.04) {
      this.cubeUnlocked = true;
      document.getElementById("cubeModal").style.display="block";
    }else if(this.moneyEarned >= 3.00 && this.moneyEarned <= 3.02) {
      this.happyMealUnlocked = true;      
      document.getElementById("happyMealModal").style.display="block";
    }else if(this.moneyEarned >= 0.99 && this.moneyEarned <= 1.03) {
      this.musicUnlocked = true;
      document.getElementById("musicModal").style.display="block";
    }else if(this.moneyEarned >= 0.25 && this.moneyEarned <= 0.28) {
      this.gumUnlocked = true;
      document.getElementById("gumModal").style.display="block";
    }
  }

  goHome() {
    this.route.navigate(['home']);
  }
}
