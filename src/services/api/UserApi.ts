import {Observable} from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx';
import {RegistrationResponse} from './responses/user/RegistrationResponse'
import {EmailExistsResponse} from './responses/user/EmailExistsResponse'
import {Response} from './responses/Response'
import fetch from 'node-fetch';
import {injectable, inject} from 'inversify';
import Types from '../../di/Types'

@injectable()
export class UserApi {

  private baseUrl: string;
  private token: string;

  constructor(baseUrl: string, token?: string) {
    this.baseUrl = baseUrl;
    this.token = token;
  }

  public setToken(token: string) {
    this.token = token;
  }

  register(name: string, email: string, password: string): Observable<RegistrationResponse> {
    return Observable.fromPromise(fetch(this.baseUrl+'user/signup', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      })
    }).then(res => res.json<RegistrationResponse>()));
  }

  emailExists(email: string): Observable<EmailExistsResponse> {
    return Observable.fromPromise(fetch(this.baseUrl+'user/emailExists', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email
      })
    }).then(res => res.json<EmailExistsResponse>()));
  }

  deleteUser(): Observable<Response> {
    return Observable.fromPromise(fetch(this.baseUrl+'user/deleteUser', {
      method: 'POST',
      headers: {
        "Authorization": 'Bearer ' + this.token,
        "Content-Type": "application/json"
      },
    }).then(res => res.json<Response>()));
  }

  updateName(name: string): Observable<Response> {
    return Observable.fromPromise(fetch(this.baseUrl+'user/updateName', {
      method: 'POST',
      headers: {
        "Authorization": 'Bearer ' + this.token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name
      })
    }).then(res => res.json<Response>()));
  }

  updateEmail(newEmail: string): Observable<Response> {
    return Observable.fromPromise(fetch(this.baseUrl+'user/updateEmail', {
      method: 'POST',
      headers: {
        "Authorization": 'Bearer ' + this.token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        newEmail: newEmail
      })
    }).then(res => res.json<Response>()));
  }
}
