import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  user:any;
  repos: any[];
  username: string;

  constructor(private _githubService: GithubService) { 
    // this._githubService.getUser().subscribe(user => {
    //   console.log(user);
    //   this.user = user;
    // });

    // this._githubService.getRepos().subscribe(repos => {
    //   console.log(repos);
    //   this.repos = repos;
    // });
    this.user = false;
  }

  searchUser(){
    this._githubService.updateUser(this.username);
    this._githubService.getUser().subscribe(user => {
      console.log(user);
      this.user = user;
    });

    this._githubService.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
  }

  ngOnInit() {
  }

}