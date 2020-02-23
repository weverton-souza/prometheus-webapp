import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {ProfileEffect, ProfileReducer} from '@shared/app-state';
import {MaterialModule} from './material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forFeature('PROFILE_STATE', {
      'profile': ProfileReducer
    }),
    EffectsModule.forFeature([ProfileEffect])
  ],
  exports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule {}
