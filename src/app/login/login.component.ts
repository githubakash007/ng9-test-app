import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

export interface UserLogin {
  email: string;
  password: string;
}






const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    "Content-Type": "application/json;charset=UTF-8"
  })
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted: boolean = false;
  url = '';
  constructor(private fb: FormBuilder, private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      //email:new FormControl(['',Validators.compose([Validators.required,Validators.pattern("^[a-z0-9_-]+@[a-z]+\\.[a-z]{3}$")])]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });

  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

  onSubmit(e: any) {

    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.login(this.loginForm.value).subscribe(loginInformation => {
      if (!loginInformation) {
        return;
      }

      this.router.navigate(['/home']).catch(err => console.log(err));
    })

  }

  login(formData: UserLogin): Observable<object> {
    return this.httpClient.post(`${this.url}/login`, formData, HTTP_OPTIONS);
  }


  

}
