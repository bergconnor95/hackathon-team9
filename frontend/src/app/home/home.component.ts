import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  image:any

  constructor(
    private httpClientService: HttpClientService,
    private route: Router) { }

  ngOnInit() {
  }

  playGame = () => {
    console.log('I was clicked!');
    this.route.navigate(['game'])
  }

  getImages = () => {
    this.httpClientService.getImages().subscribe(
      response =>this.handleSuccessfulResponse(response)
     );
  }

  handleSuccessfulResponse(response) {
    this.image = response;
  }

}
