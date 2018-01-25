import * as React from 'react';
import {Field} from '../../../components/Field';
import {FormHeader} from '../../../components/FormHeader';
import {ErrorComponent} from '../../../components/ErrorComponent';
import {UserContract} from '../../../mvp/user/UserContract';
import presenterContainer from '../../../di/PresenterContainer';
import Types from '../../../di/Types';
import Validator from '../../../utils/Validator'

export class LoginComponent extends React.Component<any, any>
  implements UserContract.View {

    private userPresenter: UserContract.Presenter;
    private modalOpen;

    constructor(props: any) {
      super(props);
      this.state = {
        email: '',
        pass: '',
        emailValid: true,
        passValid: true,
        displayError: false,
        error: ''
      }

      this.userPresenter =
        presenterContainer.get<UserContract.Presenter>(Types.USER_PRESENTER);
      this.userPresenter.attach(this);
      this.modalOpen = false;
    }

    private login = () => {
      if (!this.state.email || !this.state.pass) {
        this.displayError('Please fill all fields');
        return;
      }

      if (!this.state.emailValid || !this.state.passValid) {
        return;
      }

      this.setState({ displayError: false });
      this.userPresenter.loginUser(
        this.state.email, this.state.pass
      );
    }

    public saveToken = (token: string) => {
      // TODO save token
      console.log(token);
    }

    public displayError = (error: string) => {
      this.setState({
        error: error,
        displayError: true
      });
    }

    private updateEmail = (e: any) => {
      var email = e.target.value;
      var emailValid = Validator.email(email);
      this.setState({
        email: email,
        emailValid: emailValid
      });
    }

    private updatePass = (e: any) => {
      var pass = e.target.value;
      var passValid = Validator.alphaNum(pass);
      this.setState({
        pass: pass,
        passValid: passValid
      });
    }

    render() {
      return (
        <div>
          <a ref={(element: any) => {
              if (!this.modalOpen) {
                this.modalOpen = true;
                element.click();
              }
            }}
            data-toggle="modal"
            data-target="#modalLogin" />

          <div
            className='modal fade'
            id='modalLogin'
            tabIndex={-1}
            role='dialog'
            aria-labelledby='myModalLabel'
            aria-hidden='true'>
    		    <div className='modal-dialog cascading-modal' role='document'>
  		        <div className='modal-content'>
                <FormHeader title='Log In' icon='user' />

                <Field
                  icon='envelope'
                  label='Your Email'
                  showLabel={true}
                  onChange={this.updateEmail}
                  errorMsg='Invalid Email'
                  showError={!this.state.emailValid} />

                  <Field
                    icon='lock'
                    type='password'
                    label='Your Password'
                    showLabel={true}
                    onChange={this.updatePass}
                    errorMsg='Invalid Password'
                    showError={!this.state.passValid} />

                  <div className='ml-3'>
                    <ErrorComponent
                      msg={this.state.error}
                      visibile={this.state.displayError} />
                  </div>

                  <div className='text-center mt-2'>
                      <a>
                        <button className='btn btn-info' onClick={this.login}>
                          Log in <i className='fa fa-sign-in ml-1'></i>
                        </button>
                      </a>
                  </div>
                </div>
            </div>
          </div>
        </div>
      );
    }
}
