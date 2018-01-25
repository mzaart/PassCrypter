import {Response} from '../Response'
import {Account} from '../../../../models/Account'

export interface LoadCredentialsResponse extends Response {
  account: Account
}
