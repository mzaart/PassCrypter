import {Response} from '../Response'

export interface LoadAccountsResponse extends Response {
  urls: Map<string, Array<String>>
}
