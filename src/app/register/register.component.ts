import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title = 'Register';
  registerForm: FormGroup;
  submitted = false;
  resp:string = '';
  constructor(private Auth:AuthService,private router:Router,private formBuilder: FormBuilder) { }
  
  
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  
  }
  get f() { return this.registerForm.controls; }

  UserRegister(event){
    this.submitted = true;
    const target = event.target;
    event.preventDefault();

    if (this.registerForm.invalid) {
      //alert('Invalid');
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    const email = target.querySelector('#email').value;
    const password = target.querySelector('#password').value;
    this.Auth.registerUser(email,password).subscribe(data => {
      if(data.success) {
        this.router.navigate(['login']);
        //this.Auth.setLoggedIn(true);
        //window.alert(data.message);
      } else {
        //this.resp = data.message;
        //window.alert(data.message);
      }
      this.resp = data.message;
    });
    console.log(target);
  }

}
