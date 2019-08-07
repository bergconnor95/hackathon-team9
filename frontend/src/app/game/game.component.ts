import {Component, HostListener, OnInit} from '@angular/core';
import { ModalService } from '../services/modal.service';
import { Router } from '@angular/router';
import {KEY_CODE} from "../button-click/button-click.component";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

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
  boxMargin = 0;

  constructor(private modalService: ModalService,
    private route: Router) { }

  ngOnInit() {
    console.log("the page has been loaded")
    // setInterval( scroll, 1)


  window.scrollTo(0,document.body.scrollHeight);
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
    this.moneyEarned += 0.04;
    window.scrollTo(0,0);

    console.log(this.moneyEarned);
    this.height += 10;
    document.getElementById('progressBar').style.height = this.height+'px';
    this.lowerView()
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
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    this.expandBar()
  }
  goHome() {
    this.route.navigate(['home'])
  }
}
