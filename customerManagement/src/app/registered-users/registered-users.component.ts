import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

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
  ) { }

  ngOnInit() {

    this.userService.getAllUsers().subscribe((data: any) => {
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
    this.userService.updateAnUser(json).subscribe(data => {
      alert("successfully Updated");
    })
  }
editUser(user){
  this.currentUser = user;
}
  delete(user){
    this.userService.deleteUserFromList(user.id).subscribe(data =>{
    window.location.reload();
    })
  }

}
