import * as React from 'react';
import {RegisterComponent} from './RegisterComponent';
import BackgroundImageCss from '..//style/BackgroundImageCss';
import ContentCss from '../style/ContentCss';

interface InfoProps {
  onLearnMore: () => any
}

export class InfoComponent extends React.Component<InfoProps, any> {

  constructor(props: InfoProps) {
    super(props);
  }

  render() {
    return (
      <header className='flex-box'>
		    <div className='hm-black-strong' style={BackgroundImageCss}>
		        <div className='full-bg-img flex-center'>
		            <div className='container'>
		                <div className='row' style={ContentCss}>
                        <div className='col-lg-6'>
                          <div className='description'>
                              <h2 className='h2-responsive wow fadeInLeft white-text'>
                                Sign up right now!
                              </h2>
                              <hr className='hr-dark wow fadeInLeft'></hr>
                              <p className='wow fadeInLeft white-text' data-wow-delay='0.4s'>
                                Strong passwords combined with having many passwords can cause headaches.
                                Our manager helps eliminate that by letting you access your paswords
                                from any browser, anywhere, anytime, no need to carry yet another device
                                or install on multiple computers.
                              </p>
                              <br></br>
                              <a className='btn btn-outline-white btn-lg wow fadeInLeft'
                                data-wow-delay='0.7s'
                                onClick={this.props.onLearnMore}>
                                Learn more
                             </a>
                          </div>
                      </div>

                      <div className='col-lg-6'>
                        <RegisterComponent/>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </header>
    );
  }
}
