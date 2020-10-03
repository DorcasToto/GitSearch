import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

import { User } from './searchClasses/user'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  apiUrl = environment.API_URL;
  apiKey = environment.API_KEY;

  constructor(private http: HttpClient) { }

  userinClass:User

  // searchUser(user): Observable<any> {

  //   return this.http.get(this.apiUrl + user.value);
  // }

  searchUser(user) {
    interface Responsee {
      login: string,
      avatar_url: string,
      followers: number,
      following: number,
      bio: string,
      location: string,
      email: string,
      repos: string,

    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<Responsee>(this.apiUrl + user.value).toPromise().then(res => {

        let username = res.login;
        let image = res.avatar_url;
        let followers = res.followers;
        let following = res.following;
        let bio = res.bio;
        let location = res.location;
        let emailAddress = res.email;
        let repos = res.repos;

        let user = new User(username,image,followers,following,bio,location,emailAddress,repos)
        this.userinClass = user;
        
        console.log(res.repos);
        resolve()

      }, error => {
        //console.log("error");
        reject();
      })

    });
  }

}


