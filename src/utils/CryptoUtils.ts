import * as Rx from 'rxjs/Rx';
import {injectable} from 'inversify';

@injectable()
export class CryptoUtils {

  private crypto: Crypto

  constructor() {
    this.crypto = window.crypto;
    if (!this.crypto) {
      throw "Cryptography API not Supported";
    }
  }

  public decrypt(pass: string, cypherText: string, iv: Uint8Array): Rx.Observable<string> {
    var buffer: BufferSource = this.stringToArrayBuffer(cypherText)
    return this.getKey(pass).flatMap((key: CryptoKey) =>
    	  this.crypto.subtle.decrypt({"name": "AES-GCM", iv}, key, buffer)
      )
      .flatMap((buffer: ArrayBuffer) =>
        this.arrayBufferToString(new Uint8Array(buffer)))
      .toArray()
      .map(strArr => strArr.join(''));
  }

  public encrypt(pass: string, plainText: string, iv: Uint8Array): Rx.Observable<string> {
    var buffer: BufferSource = this.stringToArrayBuffer(plainText)
    return this.getKey(pass).flatMap((key: CryptoKey) =>
        this.crypto.subtle.encrypt({"name": "AES-GCM", iv}, key, buffer)
      )
      .flatMap((buffer: ArrayBuffer) => {
        return this.arrayBufferToString(new Uint8Array(buffer))
      })
      .toArray()
      .map(strArr => strArr.join(''));

  }

  public hashSHA256(str: string): Rx.Observable<string> {
    var buffer: BufferSource = this.stringToArrayBuffer(str);
    return Rx.Observable.fromPromise(
      this.crypto.subtle.digest({name: "SHA-256"}, buffer)
    ).flatMap((buffer: ArrayBuffer) =>
      this.arrayBufferToString(new Uint8Array(buffer))
    )
    .toArray()
    .map(strArr => strArr.join(''));
  }

  public generateIV(): Uint8Array {
	   return this.crypto.getRandomValues(new Uint8Array(16));
  }

  private getKey(pass: string): Rx.Observable<CryptoKey> {
    pass = pass.substring(0, pass.length/2); // assumes pass is 256 bits
    return Rx.Observable.fromPromise(this.crypto.subtle.importKey(
      "raw",
      this.stringToArrayBuffer(pass),
      {name: "AES-GCM"},
      true,
      ["encrypt", "decrypt"]
    ));
  }

  private stringToArrayBuffer(str: string): Uint8Array {
    var bytes = new Uint8Array(str.length);
    for (var iii = 0; iii < str.length; iii++) {
        bytes[iii] = str.charCodeAt(iii);
    }

    return bytes;
  }

  private arrayBufferToString(buffer: Uint8Array): string {
    var str = "";
    for (var iii = 0; iii < buffer.byteLength; iii++) {
        str += String.fromCharCode(buffer[iii]);
    }

    return str;
  }
}
