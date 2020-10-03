import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import { ProfileService } from '../profile.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.searchUser('');

  }
  searchUser(user) {

    this.profileService.searchUser(user)
  }
}
