import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  public loginInvalid = false;
  private formSubmitAttempt = false;
  //private returnUrl: string;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
    });
   }

  onSubmit(): void {
    if(this.form && this.form.valid){
      let email = this.form.get('email');
      let pass = this.form.get('password');
      this.auth.signIn(email?.value, pass?.value).then((val)=>{
        if(val === true){
          this.router.navigate(['home']);
        }
      });
    }

  }
  ngOnInit(): void {
  }

}