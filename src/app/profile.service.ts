import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

import { User } from './searchClasses/user'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  userProfile: User

  apiUrl = environment.API_URL;
  apiKey = environment.API_KEY;

  constructor(private http: HttpClient) {
    this.userProfile = new User('', '', 0, 0, '', '', '', '');
  }

  searchUser(user: string) {
    interface Responsee {
      login: string,
      avatar_url: string,
      followers: number,
      following: number,
      bio: string,
      location: string,
      email: string,
      public_repos: string,

    }

    let baseUrl = this.apiUrl + user + '?access_token=' + this.apiKey;
    let promise = new Promise((resolve, reject) => {
      this.http.get<Responsee>(baseUrl).toPromise().then(res => {
        this.userProfile = res;
        console.log(baseUrl);
        resolve()

      }, error => {
        reject();
      })

    });
    return promise
  }
}


