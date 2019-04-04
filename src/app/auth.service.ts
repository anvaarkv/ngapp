import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


interface myData {
  success: boolean,
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private loggedInStatus: boolean = false;
  setLoggedIn(value: boolean) {
    this.loggedInStatus = value
  }

  get isLoggedIn() {
    return this.loggedInStatus
  }

  getUserDetails(username, password) {
    // post these details to API server return user info if correct
    return this.http.post<myData>('/api/auth.php', {
      username,
      password
    })
  }


}