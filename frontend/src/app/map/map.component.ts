import { Component } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  stateCode = '';
  rate = 0;

  constructor(
    private httpClientService:HttpClientService,
    private router:Router
  ) { }

  onMapClick(state) {
    this.stateCode = state["state-abbr"];
    this.httpClientService.getIncome(this.stateCode).subscribe(
      response =>this.handleSuccessfulResponse(response)
     );
  }

  handleSuccessfulResponse(response) {
    this.rate = response;
    this.router.navigate(['/game'], { queryParams: {
      rate: this.rate
    }})
  }

}
