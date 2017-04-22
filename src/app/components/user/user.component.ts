import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../services/users.service';

@Component({
     selector: 'app-user',
     templateUrl: './user.component.html',
     styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
     usernameInput:any;
     user:any = {};
     userRepos: any = [];

     constructor(private usersService : UsersService) { }


     ngOnInit() {
     }

     searchUser() {
          console.log(this.usernameInput);
          this.usersService.getUser(this.usernameInput)
          .then((data) => {
               if(data === 404) {
                    console.log('User not found');
                    this.user = {}
               }else {
                    this.user = data;
                    this.getRepositories(this.usernameInput);
                    console.log(this.user);
               }
               this.usernameInput = '';
          })
     }

     getRepositories(username) {
          this.usersService.getRepos(username)
          .then((data) => {
               if(data === 404) {
                    console.log('Repository not found');
                    this.userRepos = {}
               }else {
                    this.userRepos = data;
               }
          })
     }

}
