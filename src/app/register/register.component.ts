import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    "Content-Type":"application/json;charset:UTF-8"
  })
};

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  registrationForm:FormGroup;
  url:string = "./";

  constructor(private fb:FormBuilder,private httpClient:HttpClient, private router:Router) { }

  ngOnInit(): void {
        
    this.registrationForm = this.fb.group({
      email: ['',[Validators.required, Validators.pattern('^[a-z0-9_-]+@[a-z]+\\.[a-z]{3}$')]],
      username:['', Validators.required],
      password: ['', Validators.required],
      repeatPassword:['',Validators.required]
    }, {validators: this.mustMatch('password','repeatPassword')});
  }

  mustMatch(controlName:string, matchingControlName:string){
    return (grp:FormGroup) => {
      const control = grp.controls[controlName];
      const matchingControl = grp.controls[matchingControlName] ;
      if(matchingControl.errors && !matchingControl.errors.mustMatch){
        return;
      }

      if(control.value !==  matchingControl.value){
          matchingControl.setErrors({mustMatch:true})
      }
      else{
        matchingControl.setErrors(null);
      }
    }
  }

  onSubmit(){
    this.router.navigate(['/login']);
    if(this.registrationForm.valid){
      this.registerUser(this.registrationForm.value).subscribe((x:any) => {
          if(1 !== 1){
               // this.showMessage();
               return;
          }

          this.router.navigate(['/login']).catch(e => console.log('Error:', e));
      })

    }

  }

   registerUser(formData:any): Observable<any>{

    return this.httpClient.post(`${this.url}/register`, formData, HTTP_OPTIONS)

   }

}
