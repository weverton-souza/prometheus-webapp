import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {ProfileEffect, ProfileReducer} from '@shared/app-state';
import {MaterialModule} from './material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature('PROFILE_STATE', {
      'profile': ProfileReducer
    }),
    EffectsModule.forFeature([ProfileEffect])
  ],
  exports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule {}
