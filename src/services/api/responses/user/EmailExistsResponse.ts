import {Response} from '../Response'

export interface EmailExistsResponse extends Response {
  userExists: boolean
}
