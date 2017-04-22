import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
     usernameInput: string;
     // user: any;
  constructor(private usersService : UsersService) { }

  ngOnInit() {
  }
  searchUser() {
     console.log(this.usernameInput);
     this.usersService.getUser(this.usernameInput)
          // .then((data) => {
          //      console.log(data);
          //      this.usernameInput = '';
          //           if(data === 404) {
          //                console.log('Usuário não encontrado');
          //
          //           }else {
          //                this.user = data;
          //           }
          // })
 }
}
