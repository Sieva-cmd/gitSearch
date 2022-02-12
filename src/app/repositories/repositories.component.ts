import { Component, OnInit } from '@angular/core';
import { Repostories } from '../repostories';
import { ProfileService } from '../profile-service/profile.service'

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  

  repos:any = [];

  constructor(private repoService: ProfileService ) {
  
  

  }

  ngOnInit() {
    this.repoService.getRepoInfo();
    this.repos = this.repoService.repos;
  }

}
