import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {ProfileEffect, ProfileReducer} from '@shared/app-state';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('PROFILE_STATE', {
      'profile': ProfileReducer
    }),
    EffectsModule.forFeature([ProfileEffect])
  ]
})
export class SharedModule {
}
