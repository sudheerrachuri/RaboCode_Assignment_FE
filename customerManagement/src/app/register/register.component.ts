import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  userForm = new FormGroup({
    name: new FormControl(''),
    mobileNumber: new FormControl(''),
    email: new FormControl(''),
    language: new FormControl(''),
    gender: new FormControl(''),
  });


}
