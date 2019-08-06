import { Component, HostListener } from '@angular/core';

export enum KEY_CODE {
    RIGHT_ARROW = 39,
    LEFT_ARROW = 37,
    SPACE = 32
}

@Component({
  selector: 'app-button-click',
  templateUrl: './button-click.component.html',
  styleUrls: ['./button-click.component.css']
})
export class ButtonClickComponent {

  value = 0;
  amount = .25;
  money = 0;
  constructor() { }
  
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);

    if(event.keyCode === KEY_CODE.SPACE) {
      this.increment();
    }
  }
  
  increment() {
    this.value++;
    this.money = this.value * this.amount;
  }
  
  clear() {
    this.value = 0;
  }
}
