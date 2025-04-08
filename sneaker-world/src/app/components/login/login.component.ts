import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user.service';
import { User } from '../../interfaces/user';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
  users: User[] = []
  
  logUser: {email: string, password: string}= {
    email: '',
    password: '',
  }
  constructor(private router: Router,private user: UserService){
    this.user.getUsers().subscribe((resp : User[]) => {
      this.users = resp
    })
  }
  

  checkDetails(){
    
    for (let user of this.users){
      if(this.logUser.email === user.email && this.logUser.password === user.password){
        console.log(user)
      }
    }
  }

}
