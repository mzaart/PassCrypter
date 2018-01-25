import 'reflect-metadata';
import {Container} from 'inversify';
import Types from './Types'

import {UserContract} from '../mvp/user/UserContract'
import {UserPresenter} from '../mvp/user/UserPresenter'

var presenterContainer = new Container();
presenterContainer.bind<UserContract.Presenter>(Types.USER_PRESENTER).to(UserPresenter);

export default presenterContainer;
