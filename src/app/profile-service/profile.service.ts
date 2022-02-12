import { Injectable } from '@angular/core';
import { Profile } from '../profile-class/profile';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username!: string;
  private clientID = '79b5763e808d746f79ff';
  private clientSecret = '0ffad460c25332b87fb3be7f0b8389b315ac88d8'


  profile!: Profile;
  
  constructor(private http: HttpClient) {
    console.log("service is working");
    this.username = 'Sieva-cmd';

    this.profile = new Profile("", "", "", "", "", "", "", "", "");
    

  }

  getProfileInfo() {
    interface ApiResponse {
      name: string;
      avatar_url: string;
      company: string;
      hireable: string;
      public_repos: string;
      followers: string;
      following: string;
      html_url: string;
      login: string
    }

    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.apiUrl + this.username + "?client_id =" + this.clientID + "&clientsecret =" + this.clientSecret).toPromise().then(response => {
        this.profile.name = response!.name;
        this.profile.avatar_url = response!.avatar_url;
        this.profile.company = response!.company;
        this.profile.hireable = response!.hireable;
        this.profile.followers = response!.followers;
        this.profile.following = response!.following;
        this.profile.html_url = response!.html_url;
        this.profile.public_repos = response!.public_repos;
        this.profile.login = response!.login

        resolve(null)
      },
        error => {
          console.log("User not found");

          reject(error)
        });
    })

    return promise


  }
  // getRepoInfo() {

  //   interface ApiResponse {
  //     name: string;
  //     repos_url: string;
  //     description: string;

  //   }

  //   let promise = new Promise((resolve, reject) => {
  //     this.http.get<ApiResponse>(environment.apiUrl + this.username + "/repos?client_id =" + this.clientID + "&clientsecret =" + this.clientSecret).toPromise().then(response => {
  //       this.repos.name = response!.name;
  //       this.repos.description = response!.description;
  //       this.repos.repos_url = response!.repos_url;


  //       resolve(null)
  //     },
  //       error => {
  //         console.log("Repositories not found");

  //         reject(error)
  //       });
  //   })

  //   return promise


  // }

  updateProfile(username: string) {
    this.username = username;
  }
}



