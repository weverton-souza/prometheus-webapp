import { Component, OnInit } from '@angular/core';
import { UpdateProfile, CreateProfile, DeleteProfile } from '@shared/app-state/user/user.actions';
import { Profile } from '@shared/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Prometheus';
  
  ngOnInit() {
    console.log(new UpdateProfile(new Profile()));
    console.log(new DeleteProfile(new Profile()));
  }
}
