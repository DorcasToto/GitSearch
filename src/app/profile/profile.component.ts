
import { Component, OnInit } from '@angular/core';


import { ProfileService } from '../profile.service'
import { User } from '../searchClasses/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userProfile: User

  constructor(private profileService: ProfileService) {
    //this.userinClass = new User("", "", 0, 0, "", "", "", "")
  }

  searchUser(user) {

    this.profileService.searchUser(user).then((succes) => {
      this.userProfile = this.profileService.userProfile;
    },
      (error) => {
        console.log(error)
      }

    )

  }

  ngOnInit(): void {

    this.searchUser('DorcasToto');

  }
}
