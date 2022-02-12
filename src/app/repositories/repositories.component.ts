import { Component, OnInit } from '@angular/core';
import { Repostories } from '../repostories';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  

  repos!:Repostories []; 

  constructor( private http:HttpClient) {

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
