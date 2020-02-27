import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {ProfileEffect, ProfileReducer} from '@shared/app-state';
import {MaterialModule} from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MathJaxModule } from '@core/math-jax/math-jax.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature('PROFILE_STATE', {
      'profile': ProfileReducer
    }),
    EffectsModule.forFeature([ProfileEffect]),
    MathJaxModule.forRoot({
      version: '2.7.5',
      config: 'TeX-AMS_HTML',
      hostname: 'cdnjs.cloudflare.com'
    }),
  ],
  exports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule {}
