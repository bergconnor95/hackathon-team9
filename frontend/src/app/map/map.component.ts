import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  abbr = '';

  constructor() { }

  onMapClick(state) {
    this.abbr = state["state-abbr"];
  }

}
