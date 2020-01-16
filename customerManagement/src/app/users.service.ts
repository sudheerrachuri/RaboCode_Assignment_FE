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

  usersUrl = '/customerManagement/user/listofusers';
  deleteUrl ='/customerManagement/user/removeuser/';
  updateUrl = '/customerManagement/user/updateuser';
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any>{
    return this.http.get<any>(this.usersUrl,httpOptions);
  }
  deleteUserFromList(id): Observable<any>{
    return this.http.delete<any>(this.deleteUrl+id,httpOptions);
  }
  updateAnUser(user): Observable<any>{
    return this.http.put<any>(this.updateUrl,user,httpOptions);
  }
}
