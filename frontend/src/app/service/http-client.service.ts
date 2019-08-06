import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  apiURL: string = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  getImages() {
    return this.httpClient.get(`${this.apiURL}/images`)
  }
}
