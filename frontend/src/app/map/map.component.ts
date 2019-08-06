import { Component, Output } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent {

  stateCode = '';
  rate = 0;

  constructor(
    private httpClientService:HttpClientService
  ) { }

  onMapClick(state) {
    this.stateCode = state["state-abbr"];
    this.httpClientService.getIncome(this.stateCode).subscribe(
      response => this.handleSuccessfulResponse(response)
     );
  }

  handleSuccessfulResponse(response) {
    this.rate = response;
  }

}
