import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

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
  }

  spendMoney() {
    console.log('spending my money and closing out now.')
  }

}
