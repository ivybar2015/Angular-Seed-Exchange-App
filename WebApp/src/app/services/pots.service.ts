import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


export interface GetAPIObjectResults {
  // valuable from web API
   status: number;  // Status Code - 200 is good etc
   msg: string;  // Message from status
   data: any; //  Gets the JSON data
}


@Injectable({
  providedIn: 'root'
})
// for flower-list-api-data
export class PotService {

  // Get base url to the API from environment file at the root of the app
  baseURL = environment.baseURL;
  constructor(private http: HttpClient) { }

// GetAPIObjectResults is name of interface
  getList(): Observable<GetAPIObjectResults> {
    // const GetUrl = `${this.baseURL}/api/pot/getjoint`; same as  const GetUrl = this.baseURL + '/api/pot/getjoint';

    const GetUrl = this.baseURL + '/api/pot/getjoint';

    console.log(GetUrl);
    return this.http.get<GetAPIObjectResults>(GetUrl);

  }
  getDetail(): Observable<GetAPIObjectResults> {
    return null;
  }

}

