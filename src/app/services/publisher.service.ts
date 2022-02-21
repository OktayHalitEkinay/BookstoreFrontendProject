import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Publisher } from '../models/publisher';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  apiUrl = 'https://localhost:44321/api/';
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<Publisher>> {
    let newPath = this.apiUrl + 'Publishers/GetAll';
    return this.httpClient.get<ListResponseModel<Publisher>>(newPath);
  }
}
