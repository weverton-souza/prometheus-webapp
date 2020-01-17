import {Action} from "@ngrx/store";
import {type} from './type-cache';

export const ClassFactory = <T>(className: string, action: string, payloadType: T) => {
  const obj = {} as Action;
  const nameClass = action + className;
  obj[nameClass] = class implements Action {
    static actionType: string = type(`@caltech/${className.toLocaleLowerCase()}${action}`);
    readonly type = obj[nameClass].actionType;

    constructor(public payload: T) {
    }
  };
  return obj[nameClass];
};
