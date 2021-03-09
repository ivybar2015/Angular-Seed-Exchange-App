//////////////////////////////////////////
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

// used interface
export interface GetAPIObjectResults {
  // valuable must match from web API
   status: number;  // Status Code - 200 is good etc
   msg: string;  // Message from status
   data: any;  //  Gets the JSON data
}

@Injectable({
    providedIn: 'root'
  })

// for flower-list-api-data call
export class FlowersService {
  // Get base url to the API from environment file at the root of the app
  baseURL = environment.baseURL;
  constructor(private http: HttpClient) { }

  // method   getFlowerList()
  getFlowerList(): Observable<GetAPIObjectResults> {
    // assign rout from web api
    const URL = `${this.baseURL}/api/product/getall`;
    console.log(URL);
    return this.http.get<GetAPIObjectResults>(URL);
  }
// action method
  getDetails() {

    return null;
  }


  saveDetails() {
    // Post goes here
    return null;
  }
}

