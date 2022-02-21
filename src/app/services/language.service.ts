import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from '../models/language';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  apiUrl = 'https://localhost:44321/api/';
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<Language>> {
    let newPath = this.apiUrl + 'Languages/GetAll';
    return this.httpClient.get<ListResponseModel<Language>>(newPath);
  }
}
