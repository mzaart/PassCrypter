import {Response} from '../Response'

export interface TokenResponse extends Response {
  loggedIn: boolean
  token: string
}
