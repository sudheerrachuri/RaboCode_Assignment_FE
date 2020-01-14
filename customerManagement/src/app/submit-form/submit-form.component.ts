import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.css']
})
export class SubmitFormComponent implements OnInit {

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
