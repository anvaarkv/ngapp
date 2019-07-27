import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { DataService } from '../data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth : AuthService,
     private router: Router,
     private formBuilder:FormBuilder,
     private titleServices:Title,
     private Data : DataService
     ) {

      }
  resp:string = '';
  title:string = 'Login';
  submitted = false;
  loginFrom : FormGroup;
  ngOnInit() {
    this.loginFrom = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
  });
  this.titleServices.setTitle('Login -');
  }
  get f() { return this.loginFrom.controls; }
  Userlogin(event){
    this.submitted = true;
    event.preventDefault();
    if (this.loginFrom.invalid) {
      return;
    }

    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    this.Data.getUserDetails(username,password).subscribe(data => {
      if(data.success) {
        console.log(data);
        this.router.navigate(['admin']);
        this.Auth.setLoggedIn(true);
        this.resp = 'LoggedIn Successfully - '+data;
      } else {
        console.log(data.message);
        this.resp = data.message;
      }
      //this.resp = data.error;
    });

  }

}
