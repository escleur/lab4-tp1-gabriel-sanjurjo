import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  form: FormGroup;
  public loginInvalid = false;
  private formSubmitAttempt = false;
  //private returnUrl: string;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required],
      confirmPassword: ['', ]
    });
   }
  ngOnInit(): void {
  }
  onSubmit(){
    if(this.form && this.form.valid){
      const {username, password} = this.form.value;
      console.log("aca",username, password);
      this.auth.register(username, password).subscribe((val)=>{
        if(val === true){
          //this.router.navigate(['login']);
        }
      });
    }
  }
}
