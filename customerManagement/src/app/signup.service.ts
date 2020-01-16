import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  registerUrl = '/customerManagement/user/register'
  constructor(private http: HttpClient) { }

  registerUser(userForm:any): Observable<any>{
    console.log(userForm);
    return this.http.post<any>(this.registerUrl,userForm,httpOptions)

  }
}
