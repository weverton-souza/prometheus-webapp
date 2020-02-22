import {Component, OnInit} from '@angular/core';
import {Profile} from '@shared/model';
import {CreateProfile, IAppState} from '@shared/app-state/profile/profile.actions';
import {Store} from '@ngrx/store';
import {ProfileService} from '@shared/service/profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Prometheus';

  constructor(private store: Store<IAppState>, private profileService: ProfileService) {}

  ngOnInit() {
    // this.profileService.register().subscribe(res => {
    //   console.log(res)
    // });
    this.profileService.signIn().subscribe(res => {
    });
    this.store.dispatch(new CreateProfile(new Profile()));
  }
}
