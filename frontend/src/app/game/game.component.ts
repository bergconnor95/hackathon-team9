import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  barheight = 600;
  earnButton = document.getElementById("Earn");
  earn(){
    this.barheight+=100;
    document.getElementById("myBar").style.height=this.barheight+"px"
    console.log(document.getElementById("myBar").style.height)
    // window.scrollTo(0,document.body.scrollHeight)
  }
}
