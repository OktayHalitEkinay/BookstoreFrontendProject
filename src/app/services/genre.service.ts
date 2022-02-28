import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from '../models/genre';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  apiUrl = 'https://localhost:44321/api/';
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<Genre>> {
    let newPath = this.apiUrl + 'Genres/GetAll';
    return this.httpClient.get<ListResponseModel<Genre>>(newPath);
  }
}
