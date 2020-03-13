// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class RegistrationService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  _url = "http://localhost:3000";
  constructor(private _http: HttpClient) { }

  registerStud(userData){
    return this._http.post<any>(this._url+"/createStudents", userData);
  }

  registerGetStud(){
    return this._http.get<any>(this._url+"/studentDetails");
  }

  registerFacu(userData){
    return this._http.post<any>(this._url+"/createFaculty", userData);
  }
}