import {createFeatureSelector} from '@ngrx/store';
import {ProfileState} from './profile.actions';

export const getProfileState = createFeatureSelector<ProfileState>('PROFILE_STATE');
