import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private signUpService: SignupService
  ) {}

  ngOnInit() {
  }
  userForm = new FormGroup({
    name: new FormControl(''),
    mobileNumber: new FormControl(''),
    email: new FormControl(''),
    language: new FormControl(''),
    gender: new FormControl(''),
  });

  register(){

    let json = JSON.stringify({
     
      name: this.userForm.value.name,
      mobileNumber: this.userForm.value.mobileNumber,
      email: this.userForm.value.email,
      language: this.userForm.value.language,
      gender:{
          id:this.userForm.value.gender
      } 
    });

    this.signUpService.registerUser(json).subscribe(data => {
      console.log(json);
      alert("succesfully registered");
    })
  }

}
