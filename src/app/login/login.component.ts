import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth : AuthService, private router: Router) { }
  resp:string = '';
  ngOnInit() {
  }

  formSubmit(event){
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    this.Auth.getUserDetails(username,password).subscribe(data => {
      if(data.success) {
        this.router.navigate(['admin']);
        this.Auth.setLoggedIn(true);
        //window.alert(data.message);
      } else {
        //this.resp = data.message;
        //window.alert(data.message);
      }
      this.resp = data.message;
    });
    console.log(username);
    console.log(password);
  }

}
