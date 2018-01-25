import {Observable} from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx';
import {TokenResponse} from './responses/token/TokenResponse'
import fetch from 'node-fetch';
import {injectable} from 'inversify';
import Types from '../../di/Types'

@injectable()
export class TokenApi {

  private baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  issueToken(email: string, password: string): Observable<TokenResponse> {
    return Observable.fromPromise(fetch(this.baseUrl+'token/issue', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password
      })
    }).then(res => res.json<TokenResponse>()));
  }
}
