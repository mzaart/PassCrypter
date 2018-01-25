import * as React from 'react';

interface FormHeaderProps {
  title: string;
  icon: string;
}

export class FormHeader extends React.Component<FormHeaderProps, any> {

  constructor(props: FormHeaderProps) {
    super(props);
  }

  render() {
    return (
      <div className='text-center'>
          <h3><i className={'mt-2 mr-2 fa fa-' + this.props.icon}></i>{this.props.title}</h3>
          <hr/>
      </div>
    );
  }
}
