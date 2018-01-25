import * as React from 'react';
import {Field} from '../../components/Field';
import {FormHeader} from '../../components/FormHeader';
import {ErrorComponent} from '../../components/ErrorComponent';
import {UserContract} from '../../mvp/user/UserContract';
import presenterContainer from '../../di/PresenterContainer';
import Types from '../../di/Types';
import Validator from '../../utils/Validator'

export class RegisterComponent extends React.Component<any, any> implements UserContract.View {

  private userPresenter: UserContract.Presenter;

  constructor(props: any) {
    super(props);
    this.userPresenter =
      presenterContainer.get<UserContract.Presenter>(Types.USER_PRESENTER);
    this.userPresenter.attach(this);

    this.state = {
      name: '',
      email: '',
      pass: '',
      passConfirm: '',
      nameValid: true,
      emailValid: true,
      passValid: true,
      passConfirmValid: true,
      displayError: false,
      error: ''
    }
  }

  public saveToken(token: string) {
    // TODO save token
    console.log(token);
  }

  public displayError(error: string) {
    this.setState({
      error: error,
      displayError: true
    });
  }

  private register = () => {
    if (!this.state.name || !this.state.email || !this.state.pass
      || !this.state.passConfirm) {
      this.displayError('Please fill all fields');
      return;
    }

    if (!this.state.nameValid || !this.state.emailValid || !this.state.passValid
      || !this.state.passConfirmValid) {
      return;
    }

    this.setState({ displayError: false });
    this.userPresenter.registerUser(
      this.state.name, this.state.email, this.state.pass
    );
  }

  private updateName = (e: any) => {
    var name = e.target.value;
    var nameValid = Validator.alphaSpace(name);
    this.setState({
      name: name,
      nameValid: nameValid
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

  private updateConfirmPass = (e: any) => {
    var passConfirm = e.target.value;
    var passConfirmValid = this.state.pass == passConfirm;
    this.setState({
      passConfirm: passConfirm,
      passConfirmValid: passConfirmValid
    });
  }

  public render() {
    return (
        <div className='col-lg-6'>
          <div className='card wow fadeInRight'>
            <div className='card-block'>
              <FormHeader title='Register' icon='user' />

              {/* Body */}
              <Field
                icon='envelope'
                label='Your Email'
                showLabel={!this.state.email}
                onChange={this.updateEmail}
                errorMsg='Invalid Email'
                showError={!this.state.emailValid} />

              <Field
                icon='user'
                label='Your Name'
                showLabel={!this.state.name}
                onChange={this.updateName}
                errorMsg='Invalid Name'
                showError={!this.state.nameValid} />

              <Field
                icon='lock'
                type='password'
                label='Your Password'
                showLabel={!this.state.pass}
                onChange={this.updatePass}
                errorMsg='Invalid Password'
                showError={!this.state.passValid} />

              <Field
                icon='lock'
                type='password'
                label='Repeat Password'
                showLabel={!this.state.passConfirm}
                onChange={this.updateConfirmPass}
                errorMsg='Passwords do not match'
                showError={!this.state.passConfirmValid} />

              <div className='ml-3'>
                <ErrorComponent
                  msg={this.state.error}
                  visibile={this.state.displayError} />
              </div>

              <div className='text-center form-sm mt-2' id='signUpButton'>
                  <button onClick={this.register} className='btn btn-info' data-toggle='modal' data-target=''>
                    Sign up
                    <i className='fa fa-sign-in ml-1'></i>
                  </button>
              </div>

              <br></br>

              {/* Footer */}
              <div className='modal-footer'>
                  <div className='options  mx-auto'>
                      <p className='pt-1'>Already have an account?
                        <a data-toggle='modal' data-target='#modalLogin' href='#' className='blue-text'>Log In</a>
                      </p>
                  </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
