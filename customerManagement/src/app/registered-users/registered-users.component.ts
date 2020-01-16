import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.css']
})
export class RegisteredUsersComponent implements OnInit {

  usersList: any;
  currentUser: any = {};
  constructor(
    private userService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {

    this.userService.getAllUsers().subscribe((data: any) => {
      console.log(data);
      this.usersList = data;
    })
  }
  userForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    mobileNumber: new FormControl(''),
    email: new FormControl(''),
    language: new FormControl(''),
    gender: new FormControl(''),
  });

  update(){

    
    let json = JSON.stringify({
      id: this.userForm.value.id,
      name: this.userForm.value.name,
      mobileNumber: this.userForm.value.mobileNumber,
      email: this.userForm.value.email,
      language: this.userForm.value.language,
      gender: this.userForm.value.gender
    });
    console.log(json);
    this.userService.updateAnUser(json).subscribe(data => {
      console.log(json);
      alert("successfully Updated");
    })
  }
editUser(user){
  this.currentUser = user;
  console.log(this.currentUser);
}
  delete(user){
    this.userService.deleteUserFromList(user.id).subscribe(data =>{
      console.log(user);
    window.location.reload();
    })
  }

}
