import * as React from 'react';
import {Feature} from './Feature';
import ContentCss from '../style/ContentCss';

const mockImg = require('../../../assets/mock.jpg');

export class AboutComponent extends React.Component<any, any> {

  render() {
    return (
      <div className='container' style={ContentCss}>
        {/* About */}
  			<div className='divider-new pt-5'>
  				<h2 className='h2-responsive wow fadeIn' data-wow-delay='0.2s'>PassCrypter</h2>
  			</div>

  			<section id='about' className='text-center wow fadeIn' data-wow-delay='0.2s'>
  				<div className='col-lg-12 mb-r center-on-small-only'>
  						<img src={mockImg} className='img-fluid z-depth-0'></img>
  				</div>
  				<p>
            PassCrypter is a simple yet powerful online password manager and
            password generator with strong security and a user-friendly interface.
            All you have to do is choose a master password and PassCtypter will
            handle the rest. It will store your passwords securely and hand them
            to you whenever you need them.
          </p>
  			</section>

        {/* Features */}
        <div className='divider-new pt-5'>
  				<h2 className='h2-responsive wow fadeIn'>Why is it so great?</h2>
  			</div>

        <div className='row features-small pt-2'>
          {/* First Column */}
          <div className='col-lg-6'>
            <Feature icon='lock'
              title='Strong Encryption'
              text={`PassCrypter uses AES-GCM encryption with salted PBKDF2
                SHA256 hashes to ensure your data is stored securely on the server.
                All you have to do is choose a strong master password and PassCrypter
                will handle the encryption and decryption.`}/>

            <Feature icon='globe'
              title='Everywhere'
              text={`You can access your data from any browser, anywhere, anytime.
                You don't have to install PassCrypter on multiple devices.`}/>
          </div>

          {/* Second Column */}
          <div className='col-lg-6'>
            <Feature icon='cloud'
              title='Host Proof'
              text={`We never have your un-encrypted data. PassCrypter does all
                the encryption and decryption on the device itself. As a result,
                 neither PassCrypter, the hacker nor a government agency could
                 access the data without knowing your master password.`}/>

            <Feature icon='ellipsis-h'
              title='Password Generator'
              text={`Generate unique and strong passwords with a single click.`}/>
          </div>
        </div>
      </div>
    );
  }
}
