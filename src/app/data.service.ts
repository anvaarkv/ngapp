import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface myData  {
  token:string,
  error:string
}


@Injectable({
  providedIn: 'root'
})
export class DataService {

private apiurl:string = 'https://reqres.in/api/';

  constructor(private http:HttpClient) { }
  private loggedInStatus:boolean = false; 
  get isLoggedIn() {
    localStorage.getItem('loggedIn');
    return this.loggedInStatus
  }

  getUserDetails(username, password) {
    // post these details to API server return user info if correct
    return this.http.post<myData>(this.apiurl+'login', {
      username,
      password
    })
  }


}
