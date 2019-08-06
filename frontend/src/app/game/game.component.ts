import { Component, OnInit, ViewChild, HostListener, Input, AfterViewInit, Host } from '@angular/core';
import { interval, timer } from 'rxjs';
import { ModalService } from '../services/modal.service';
import { map } from 'rxjs/operators';
import { MapComponent } from '../map/map.component';
import { KeyEventsPlugin } from '@angular/platform-browser/src/dom/events/key_events';
import { KEY_CODE } from '../button-click/button-click.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, AfterViewInit {

  unlocked: boolean = false;
  height = 100;
  counter = 0;
  timeout = 0;
  amount = .25;
  rate = 0;

  @ViewChild(MapComponent)
  mapComp: MapComponent;

  constructor(private modalService: ModalService) { }

  ngAfterViewInit(){
    this.rate = this.mapComp.rate;
    console.log(this.rate);
  }

  ngOnInit() {
    const secondsCounter = interval(1000);
    const mytimeout = interval(1000);
    const newCounter = secondsCounter.pipe(map(x => this.amount));

    newCounter.subscribe(x => this.counter += (x));
    mytimeout.subscribe(n => {
      if ((this.timeout++) > 5) {
        this.counter = 0;
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
