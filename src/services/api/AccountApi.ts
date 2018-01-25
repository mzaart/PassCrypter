import {Observable} from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx';
import {Response} from './responses/Response'
import {LoadCredentialsResponse} from './responses/account/LoadCredentialsResponse'
import {LoadAccountsResponse} from './responses/account/LoadAccountsResponse'
import {Account} from '../../models/Account'
import fetch from 'node-fetch';
import {injectable} from 'inversify';

@injectable()
export class AccountApi {

  private baseUrl: string
  private token: string

  constructor(baseUrl: string, token?: string) {
    this.baseUrl = baseUrl;
    this.token = token;
  }

  addAccount(account: Account): Observable<Response> {
    return Observable.fromPromise(fetch(this.baseUrl+'account/addAccount', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + this.token
      },
      body: JSON.stringify({
        account: account
      })
    }).then(res => res.json<Response>()));
  }

  loadAccounts(): Observable<LoadAccountsResponse> {
    return Observable.fromPromise(fetch(this.baseUrl+'account/loadAccounts', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + this.token
      }
    }).then(res => res.json<LoadAccountsResponse>()));
  }

  loadCredentials(websiteUrl: string): Observable<LoadCredentialsResponse> {
    return Observable.fromPromise(fetch(this.baseUrl+'account/loadCreds', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + this.token
      },
      body: JSON.stringify({
        websiteUrl: websiteUrl
      })
    }).then(res => res.json<LoadCredentialsResponse>()));
  }

  deleteAccount(websiteUrl: string): Observable<Response> {
    return Observable.fromPromise(fetch(this.baseUrl+'account/delete', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + this.token
      },
      body: JSON.stringify({
        websiteUrl: websiteUrl
      })
    }).then(res => res.json<Response>()));
  }
}
