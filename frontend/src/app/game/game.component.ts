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
  barheight = 100;
  // earnButton = document.getElementById("Earn");
  earn(){
    console.log(document.getElementById("myBar").style.height)
    // document.getElementById("myBar").style.display="block";
    // document.getElementById("modal").style.display="none";
    window.scrollTo(0,document.body.scrollHeight)
    setInterval(function grow(),100)
  }
  grow(){
    console.log("hhh")
    this.barheight+=100;
    document.getElementById("myBar").style.height=this.barheight+"px"
  }
}
