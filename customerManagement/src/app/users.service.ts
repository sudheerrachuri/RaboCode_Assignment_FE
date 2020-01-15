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
export class UsersService {

  usersUrl = '/user/listofusers';
  deleteUrl ='/user/deleteuser/{id}';
  updateUrl = '/user/updateUser';
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any>{
    return this.http.get<any>(this.usersUrl,httpOptions);
  }
  deleteUserFromList(user): Observable<any>{
    return this.http.delete<any>(this.deleteUrl,httpOptions);
  }
  updateAnUser(user): Observable<any>{
    return this.http.put<any>(this.updateUrl,user,httpOptions);
  }
}
