import * as React from 'react';

interface ErrorProps {
  msg: string;
  visibile: boolean;
}

export class ErrorComponent extends React.Component<ErrorProps, any> {

  constructor(props: ErrorProps) {
    super(props);
  }

  render() {
    return (
      <p className='text-danger animated flash'>
        {this.props.visibile && this.props.msg}
      </p>
    );
  }
}
