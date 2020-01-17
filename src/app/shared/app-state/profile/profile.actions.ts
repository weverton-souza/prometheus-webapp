import {IPageableResponse, IResponse} from '@shared/interface';
import {Profile} from '@shared/model';
import {ClassFactory, buildReducer} from '@shared/utility';

export interface ProfilePageState extends IPageableResponse<Profile> {
  selectedProfileId: string | null;
}

export interface ProfileState extends IResponse<Profile> {
  content: Profile;
}

export interface IAppState {
  profile: ProfilePageState;
}

export const initialProfileState: ProfileState = {
  content: {} as Profile,
  loading: false,
  loaded: false,
  error: '',
};

export const initialPageState: ProfilePageState = {
  content: [],
  pageable: {
    sort: {
      sorted: false,
      unsorted: false,
      empty: false
    },
    pageSize: undefined,
    pageNumber: undefined,
    offset: undefined,
    unpaged: false,
    paged: false
  },
  totalElements: undefined,
  totalPages: undefined,
  last: false,
  first: false,
  size: undefined,
  number: undefined,
  sort: {
    sorted: false,
    unsorted: false,
    empty: false
  },
  numberOfElements: undefined,
  empty: false,
  selectedProfileId: undefined,
  loading: false,
  loaded: false,
  error: '',
};

//#region | Create operations.
export const CreateProfile = ClassFactory('Profile', "/create", Profile);
export const CreateProfileSuccess = ClassFactory('Profile', "/create/success", Profile);
export const CreateProfileFail = ClassFactory('Profile', "/create/fail", Profile);
//#endregion

export const ProfileReducer = buildReducer(
  initialProfileState,
  CreateProfileSuccess, CreateProfileFail
);
