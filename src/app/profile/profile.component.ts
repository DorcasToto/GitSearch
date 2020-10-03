import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import { ProfileService } from '../profile.service'
import { User } from '../searchClasses/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userinTemplate: User;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.searchUser('');

  }
  searchUser(user) {

    this.profileService.searchUser(user);
    this.userinTemplate = this.profileService.userinClass;
  }
}
