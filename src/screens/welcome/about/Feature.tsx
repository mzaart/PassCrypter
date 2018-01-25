import * as React from 'react';

interface FeatureProps {
  icon: string,
  title: string,
  text: string
}

export class Feature extends React.Component<FeatureProps, any> {

    constructor(props: FeatureProps) {
      super(props);
    }

    render() {
      return (
        <div className='row pb-3'>
					<div className='col-2 col-md-1'>
						<i className={'fa fa-' + this.props.icon + ' fa-2x blue-text'}></i>
					</div>

          <div className='col-10'>
  					<h4 className='feature-title'><b>{this.props.title}</b></h4>
  					<p className='grey-text'>{this.props.text}</p>
  				</div>
        </div>
      );
    }
}
