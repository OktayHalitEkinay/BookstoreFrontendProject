import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookDetailDto } from '../models/bookDetailDto';
import { ListResponseModel } from '../models/listResponseModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  apiUrl = 'https://localhost:44321/api/';

  constructor(private httpClient: HttpClient) {}

  getAllBookDetails(): Observable<ListResponseModel<BookDetailDto>> {
    let newPath = this.apiUrl + 'Books/GetAllBookDetails';
    return this.httpClient.get<ListResponseModel<BookDetailDto>>(newPath);
  }
  
  getAllBookDetailsByFilter(
    authorIds: number[],
    publisherIds: number[],
    languageIds: number[]
  ): Observable<ListResponseModel<BookDetailDto>> {
    var Path = '';
    let authorIdsArray = authorIds.toString().split(',');
    let publisherIdsArray = publisherIds.toString().split(',');
    let languageIdsArray = languageIds.toString().split(',');
    //Buradaki ifade önyüzden hiçbir author id girişi yapılmadığı anlamına gelmektedir.

    if (authorIdsArray.length != 1) {
      Array.prototype.forEach.call(authorIdsArray, (element) => {
        Path = Path + 'authorIds=' + element;
        if (element != authorIdsArray[authorIdsArray.length - 1]) {
          Path = Path + '&';
        }
      });
    }

    if (publisherIdsArray.length != 1) {
      if (Path === '') {
        Array.prototype.forEach.call(publisherIdsArray, (element) => {
          Path = Path + 'publisherIds=' + element;
          if (element != publisherIdsArray[publisherIdsArray.length - 1]) {
            Path = Path + '&';
          }
        });
      } else {
        Path = Path + '&';
        Array.prototype.forEach.call(publisherIdsArray, (element) => {
          Path = Path + 'publisherIds=' + element;
          if (element != publisherIdsArray[publisherIdsArray.length - 1]) {
            Path = Path + '&';
          }
        });
      }
    }

    if (languageIdsArray.length != 1) {
      if (Path === '') {
        Array.prototype.forEach.call(languageIdsArray, (element) => {
          Path = Path + 'languageIds=' + element;
          if (element != languageIdsArray[languageIdsArray.length - 1]) {
            Path = Path + '&';
          }
        });
      } else {
        Path = Path + '&';
        Array.prototype.forEach.call(languageIdsArray, (element) => {
          Path = Path + 'languageIds=' + element;
          if (element != languageIdsArray[languageIdsArray.length - 1]) {
            Path = Path + '&';
          }
        });
      }
    }

    let newPath = this.apiUrl + 'Books/GetAllBookDetailsByFilter?' + Path;
    return this.httpClient.get<ListResponseModel<BookDetailDto>>(newPath);
  }
}
