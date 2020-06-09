import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private httpClient:HttpClient) { }

  postReq(url,data){
    // let options = { headers: new HttpHeaders().set('Content-Type', 'multipart/form-data') };
    return this.httpClient.post<any>(url,data);
  }

  getReq(url){
    return this.httpClient.get<any>(url);
  }

}
