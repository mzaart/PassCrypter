import {UserContract} from './UserContract'
import {UserApi} from '../../services/api/UserApi'
import {TokenApi} from '../../services/api/TokenApi'
import {CryptoUtils} from '../../utils/CryptoUtils'
import Validator from '../../utils/Validator'
import * as Rx from 'rxjs/Rx';
import {injectable} from 'inversify';
import appContainer from '../../di/AppContainer'
import Types from '../../di/Types'

@injectable()
export class UserPresenter extends UserContract.Presenter {

  private userApi: UserApi;
  private tokenApi: TokenApi;
  private crypto: CryptoUtils;

  constructor() {
    super();
    this.userApi = appContainer.get<UserApi>(Types.USER_API);
    this.tokenApi = appContainer.get<TokenApi>(Types.TOKEN_API);
    this.crypto = appContainer.get<CryptoUtils>(Types.CRYPTO);
  }

  public registerUser(name: string, email: string, password: string) {
      this.userApi.emailExists(email)
        .subscribeOn(Rx.Scheduler.async)
        .subscribe(response => {
          if (!response.succeeded) {
            this.getView().displayError(response.reason);
            return;
          }

          if (response.userExists) {
            this.getView().displayError('Email already exists');
            return;
          }

          this.crypto.hashSHA256(password)
            .subscribeOn(Rx.Scheduler.async)
            .flatMap(hash => this.userApi.register(name, email, hash))
            .subscribe(response => {
              if (response.succeeded) {;
                this.getView().saveToken(response.token);
              } else {
                this.getView().displayError(response.reason);
              }
            });
        })
  }

  public loginUser(email: string, password: string) {
    this.crypto.hashSHA256(password)
      .subscribeOn(Rx.Scheduler.async)
      .flatMap(hash => this.tokenApi.issueToken(email, hash))
      .subscribe(response => {
        if (response.succeeded) {
          this.getView().saveToken(response.token);
        } else {
          this.getView().displayError(response.reason);
        }
      });
  }
}
