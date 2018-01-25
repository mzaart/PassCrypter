import {BasePresenter} from '../BasePresenter'
import {injectable} from 'inversify';

export namespace UserContract {
  export interface View {

    saveToken(token: string): any;
    displayError(error: string): any;
  }

  @injectable()
  export abstract class Presenter extends BasePresenter<UserContract.View> {

      public abstract registerUser(name: string, email: string, password: string): any;
      public abstract loginUser(email: string, password: string): any;
  }
}
