import { ProfileService } from './../profile-service/profile.service';
import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile-class/profile';
import { Repostories } from '../repostories';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[]

})
export class ProfileComponent implements OnInit {

  profile!:Profile;
  username! :string;
  repos!:Repostories []; 
  


  constructor(private profileService: ProfileService,private http:HttpClient) {
   
   }

   findProfile() {
    this.profileService.updateProfile(this.username);
    this.profileService.getProfileInfo()
    this.profile = this.profileService.profile
  }

  ngOnInit() {
    
 

    this.getRepoInfo();

   
  }

    getRepoInfo(){
      this.http.get<any>("https://api.github.com/users/Sieva-cmd/repos").subscribe(
        response =>{
           console.log(response);
          this.repos = response;
        }
      );
    }



}


