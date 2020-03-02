import {Profile} from '@shared/model';
import {AbstractService} from './abstract.service';
import {AuthenticationDetails, CognitoUser, CognitoUserPool} from 'amazon-cognito-identity-js';
import {Observable} from 'rxjs';
import {Injectable, Injector} from '@angular/core';

const poolData = {
  UserPoolId: 'us-east-1_JQMNbLEvZ',
  ClientId: '2doikrvhm6qdt696kjkqpk0rkp'
};

const userPool = new CognitoUserPool(poolData);

@Injectable({providedIn: 'root'})
export class ProfileService extends AbstractService<Profile> {
  cognitoUser: any;

  constructor(private injector: Injector) {
    super(injector, '/profiles');
  }

  register(): Observable<any> {

    const attributeList = [];

    return Observable.create(observer => {
      userPool.signUp("weverton.souza", "#We852We#", attributeList, null, (err, result) => {
        if (err) {
          console.log("signUp error", err);
          observer.error(err);
        }
        this.cognitoUser = result.user;
        console.log("signUp success", result);
        observer.next(result);
        observer.complete();
      });
    });

  }

  confirmAuthCode() {
    const user = {
      Username: this.cognitoUser.username,
      Pool: userPool
    };
    return Observable.create(observer => {
      const cognitoUser = new CognitoUser(user);
      cognitoUser.confirmRegistration("", true, function (err, result) {
        if (err) {
          console.log(err);
          observer.error(err);
        }
        console.log("confirmAuthCode() success", result);
        observer.next(result);
        observer.complete();
      });
    });
  }

  signIn(): Observable<any> {
    console.log("asdasdasdasd");
    const authenticationData = {
      Username: "weverton.souza",
      Password: "#We852We#",
    };
    const authenticationDetails = new AuthenticationDetails(authenticationData);

    const userData = {
      Username: "weverton.souza",
      Pool: userPool
    };
    const cognitoUser = new CognitoUser(userData);

    return Observable.create(observer => {

      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {

          console.log(result);
          observer.next(result);
          observer.complete();
        },
        onFailure: function (err) {
          console.log(err);
          observer.error(err);
        },
      });
    });
  }
}
