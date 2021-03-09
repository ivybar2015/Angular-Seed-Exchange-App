// import { environment } from './../../environments/environment.prod';

import { Injectable } from '@angular/core';

//////////////////////////////////////////
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';


export interface GetAPIObjectData {
  data: any;  //  Gets the JSON data
  status: number;  // Status Code - 200 is good etc
  msg: string;  // Message from status
  dbase: any;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   // Get base url to the API from environment file at the root of the app
  baseURL = environment.baseURL;
  constructor(private http: HttpClient) { }

  // method to get list of user database table//
  getAuthList(): Observable<GetAPIObjectData> {
    // get rout from web api
    const URL = `${this.baseURL}/api/user/getusers`;
    console.log(URL);
    // use get to get user
    return this.http.get<GetAPIObjectData>(URL);

  }

  getUserProfile(id: string): Observable< any > {
    const URL = `${environment.baseURL}/api/user/update`;

    // const body = new HttpParams().set('Id', id).set('Username', formData.Username.value);
    const body = new HttpParams().set('Id', id);
   // console.log(URL);
    return this.http.post(URL, body.toString(),
    {
      // 'Content-Type', 'application/x-www-form-urlencoded' for Postman type requested
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')}
    );
  }




  addNewUser(datas: any): any {
    const URL = `${environment.baseURL}/api/user/add`;
    console.log('In Service ', datas.controls.UserName.value);
    const body = new HttpParams()
    .set('username', datas.controls.UserName.value)
    .append('firstname', datas.controls.FirstName.value)
    .append('lastname', datas.controls.LastName.value);

    return this.http.post(URL, body.toString(),
    {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }
// edit/update


  getSingleUserProfile(id: string): Observable< any > {
    const URL = `${environment.baseURL}/api/user/getsingleuser/${id}`;

    // const body = new HttpParams().set('Id', id).set('Username', formData.Username.value);
    const body = new HttpParams().set('Id', id);
  // console.log(URL);
    return this.http.post(URL, body.toString(),
    {
      // 'Content-Type', 'application/x-www-form-urlencoded' for Postman type requested
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')}
    );
}


  userDUpdate(id, dbase): any {
  const URL = `${environment.baseURL}/api/user/update/ ${id}`;
  const body = new HttpParams().set('data', dbase);

  return this.http.post(URL, body.toString(),
  {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  });


}



}
// FOR PROMISES NOT OBSERVABLES
// const formData = new FormData();
// formData.append('username', data.controls.UserName.value);
// formData.append('firstname', data.controls.FirstName.value);
// formData.append('lastname', data.controls.LastName.value);
// console.log('formData ', body.toString());

