import {Response} from '../Response'

export interface RegistrationResponse extends Response {
  token: string
}
