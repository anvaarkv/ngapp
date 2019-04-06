import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth : AuthService, private router: Router,private formBuilder:FormBuilder) { }
  resp:string = '';
  title:string = 'Login';
  submitted = false;
  loginFrom : FormGroup;
  ngOnInit() {
    this.loginFrom = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
  });
  }
  get f() { return this.loginFrom.controls; }
  Userlogin(event){
    this.submitted = true;
    event.preventDefault();
    if (this.loginFrom.invalid) {
      //alert('Invalid');
      return;
    }

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
    //console.log(username);
    //console.log(password);
  }

}
