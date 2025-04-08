import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = []
  user!: User;
  behaveSub = new BehaviorSubject<User[]>(this.users)
  url = "http://localhost:1111/users"
  
  constructor(private http: HttpClient) { }
  
  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.url)
  }

}
