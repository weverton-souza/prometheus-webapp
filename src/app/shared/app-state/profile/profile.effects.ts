import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ProfileService} from '@shared/service/profile.service';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {Profile} from '@shared/model';
import {catchError, map, switchMap} from 'rxjs/operators';
import {CreateProfile, CreateProfileSuccess, CreateProfileFail} from '@shared/app-state/profile/profile.actions';
import {IResponse} from '@shared/interface';

@Injectable()
export class ProfileEffect {
  constructor(private actions$: Actions, private service: ProfileService) {
  }

  @Effect()
  save$: Observable<Action> = this.actions$.pipe(
    ofType<typeof CreateProfile>(CreateProfile.actionType),
    map((action: typeof CreateProfile) => action.payload),
    switchMap((resource: Profile) =>
      this.service.save(resource).pipe(
        map((res: IResponse<Profile>) => new CreateProfileSuccess(res)),
        catchError(err => of(new CreateProfileFail(err)))
      )
    )
  );
}
