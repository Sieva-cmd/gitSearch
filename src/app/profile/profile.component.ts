import { ProfileService } from './../profile-service/profile.service';
import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile-class/profile';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[]

})
export class ProfileComponent implements OnInit {

  profile!:Profile

  constructor(private profileService: ProfileService) {
    
   }

  ngOnInit() {

    this.profileService.getProfileInfo()
    this.profile = this.profileService.profile
  }



}
