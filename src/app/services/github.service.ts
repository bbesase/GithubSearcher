import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username:string;
  private client_id = '778752b9304b887a7163';
  private client_secret = 'f738ae86ae7fa2ef36579144b3a3d657f9135796';

  constructor(private _http: Http) { 
    console.log('Github Service Ready...');
    this.username = 'bbesase';
  }

  getUser(){
    return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res => res.json());
  }

   getRepos(){
    return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res => res.json());
  }

  updateUser(username:string){
    this.username = username;
  }

}
