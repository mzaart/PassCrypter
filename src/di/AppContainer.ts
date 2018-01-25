import 'reflect-metadata';
import {Container} from 'inversify';
import Types from './Types';

import {UserApi} from '../services/api/UserApi';
import {AccountApi} from '../services/api/AccountApi';
import {TokenApi} from '../services/api/TokenApi';
import {CryptoUtils} from '../utils/CryptoUtils';

const baseUrl =  'http://localhost:5000/';
//'https://passcrypter.azurewebsites.net/';

var appContainer = new Container();
appContainer.bind<UserApi>(Types.USER_API).toConstantValue(new UserApi(baseUrl));
//appContainer.bind<AccountApi>(Types.ACCOUNT_API).to(AccountApi);
appContainer.bind<TokenApi>(Types.TOKEN_API).toConstantValue(new TokenApi(baseUrl));
appContainer.bind<CryptoUtils>(Types.CRYPTO).to(CryptoUtils);

export default appContainer;
