import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  apiURL: string = 'http://ec2-54-173-143-55.compute-1.amazonaws.com';

  constructor(private httpClient: HttpClient) { }

  getImages() {
    return this.httpClient.get(`${this.apiURL}/images`);
  }

  getIncome(stateCode) {
    return this.httpClient.get(`${this.apiURL}/fred`, {
      params: { 
        stateCode: stateCode
      }
    });
  }
}
