import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // constructor(private route: Router) { }

  ngOnInit() {
  }

  playGame = () => {
    console.log('I was clicked!');
    this.route.navigate(['game'])
  }

  stateCode = '';
  rate = 0;

  constructor(
    private route: Router,
    private httpClientService:HttpClientService
  ) { }

  onMapClick(state) {
    this.stateCode = state["state-abbr"];
    this.httpClientService.getIncome(this.stateCode).subscribe(
      response =>this.handleSuccessfulResponse(response)
     );

     document.getElementById('startModal').style.display="block";
  }

  handleSuccessfulResponse(response) {
    this.rate = response;
  }

  closeModal() {
    document.getElementById('startModal').style.display="none";
  }

}
