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

  user: User;


  constructor(private http: HttpClient) { }

  // searchUser(user): Observable<any> {

  //   return this.http.get(this.apiUrl + user.value);
  // }

  searchUser(user) {
    interface Responsee {
      login: string,
      image: string,
      followers: number,
      following: number,
      bio: string,
      location: string,
      emailaddress: string,
      repos: string

    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<Responsee>(this.apiUrl + user.value).toPromise().then(res => {
        console.log(res.login);
        resolve()

      }, error => {
        //console.log("error");
        reject();
      })

    });
  }

}


