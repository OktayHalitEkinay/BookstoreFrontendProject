import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../models/author';
import { ListResponseModel } from '../models/listResponseModel';
import { Publisher } from '../models/publisher';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  apiUrl = 'https://localhost:44321/api/';
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<Author>> {
    let newPath = this.apiUrl + 'Authors/GetAll';
    return this.httpClient.get<ListResponseModel<Author>>(newPath);
  }
}
