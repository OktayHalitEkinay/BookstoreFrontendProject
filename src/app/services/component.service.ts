import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentDetailDto } from '../models/componentDetailDto';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {
  apiUrl = 'https://localhost:44321/api/';

  constructor(private httpClient: HttpClient) {}
  getAllComponentDetails(): Observable<SingleResponseModel<ComponentDetailDto>> {
    let newPath = this.apiUrl + 'Components/GetAllComponentDetails';
    return this.httpClient.get<SingleResponseModel<ComponentDetailDto>>(newPath);
  }
  getAllComponentDetailsByComponentId(componentId:number):Observable<SingleResponseModel<ComponentDetailDto>> {
    let newPath=this.apiUrl+"Components/GetAllComponentDetailsByComponentId?componentId="+componentId;
    return this.httpClient.get<SingleResponseModel<ComponentDetailDto>>(newPath);  
  }
}


