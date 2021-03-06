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

  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');
  setLoggedIn(value: boolean) {
    localStorage.setItem('loggedIn','true');
    this.loggedInStatus = value
  }

  get isLoggedIn() {
    localStorage.getItem('loggedIn');
    return this.loggedInStatus
  }

  getUserDetails(username, password) {
    // post these details to API server return user info if correct
    return this.http.post<myData>('/api/auth.php', {
      username,
      password
    })
  }

  registerUser(email,password) {
    // post these details to API server return user info if correct
    return this.http.post<myData>('/api/register.php', {
      email,
      password
    })
  }


}
