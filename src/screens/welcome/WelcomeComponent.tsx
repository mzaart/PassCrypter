import * as React from 'react';
import {InfoComponent} from './info/InfoComponent';
import {AboutComponent} from './about/AboutComponent';

var scrollToComponent = require('react-scroll-to-component');

export class WelcomeComponent extends React.Component<any, any> {

  private aboutComponent: any;

  private scrollToComponent = () => {
    scrollToComponent(this.aboutComponent, { align: 'top'  });
  }

  render() {
    return (
      <div>
        <InfoComponent onLearnMore={this.scrollToComponent}/>
        <AboutComponent ref={ comp => this.aboutComponent = comp } />
      </div>
    );
  }
}
