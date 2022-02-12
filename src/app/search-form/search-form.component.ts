import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile-service/profile.service';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  username!: string;
  constructor(private profileService: ProfileService) {

  }

  findProfile() {
    this.profileService.updateProfile(this.username);
  
  }

  ngOnInit(): void {
  }

}
