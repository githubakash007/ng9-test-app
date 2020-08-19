import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-array-demo',
  templateUrl: './form-array-demo.component.html',
  styleUrls: ['./form-array-demo.component.scss']
})
export class FormArrayDemoComponent implements OnInit {
  demoForm: FormGroup;
  isSubmitted: boolean = false;
  constructor(private fb: FormBuilder) { }
  show = false;

  ngOnInit(): void {
    this.demoForm = this.fb.group({
      //email:new FormControl(['',Validators.compose([Validators.required,Validators.pattern("^[a-z0-9_-]+@[a-z]+\\.[a-z]{3}$")])]),
      name: new FormControl('', [Validators.required]),
      roles: this.fb.array([this.createRole()])
    });
  }

  get roleForm() {
    return this.demoForm.get('roles') as FormArray;
  }

  createRole() {
    return this.fb.group({
      myRole: [''],
      isAdmin: ['']
    });
  }

  addRole() {
    this.roleForm.push(this.createRole());
    console.log(this.demoForm.value);
    // return role;
  }

  removeRole(e, index) {
    this.roleForm.removeAt(index);
    console.log(this.demoForm.value);
  }

}
