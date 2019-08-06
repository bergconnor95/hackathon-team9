import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  unlocked: boolean = false;
  height = 100;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  openModal() {
    console.log('I opened modal!');
    // document.getElementById("modal").style.opacity='1';
    document.getElementById("modal").style.display="block";
    // document.body.style.backgroundColor='gray';
  }

  keepPlaying() {
    document.getElementById("modal").style.display="none";
    this.unlocked = true;
  }

  spendMoney() {
    console.log('spending my money and closing out now.')
  }

  // changeImage(id: string) {
  //   if(document.getElementById(id).src === 'happy-meal-sil.png') {
  //     document.getElementById('happy-meal').src == 'happy-meal.png'
  //   }
  // }

  expandBar() {
    console.log(document.getElementById('progressBar').style.height);
    this.height += 100;
    document.getElementById('progressBar').style.height = this.height+'px';

    // height += 100;
    // console.log(height);
    // document.getElementById('progressBar').style.height = '400px';
  }

}
