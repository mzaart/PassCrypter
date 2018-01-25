import * as React from 'react';
import {ErrorComponent} from './ErrorComponent';

interface FieldProps {
  onChange?: (e: any) => void;
  icon?: string;
  type?: string;
  label?: string;
  showLabel?: boolean;
  errorMsg?: string;
  showError?: boolean;
}

export class Field extends React.Component<FieldProps, any> {

  private inputId: string;

  constructor(props: FieldProps) {
    super(props);
    this.inputId = (Math.random() * 1000000).toString();
  }

  render() {
    return (
      <div className="md-form form-sm ml-3">
          <i className={"fa fa-" + this.props.icon + " prefix"}></i>
          <input
            type={this.props.type || "text"}
            id={this.inputId}
            className="form-control"
            onChange={this.props.onChange}></input>
          {this.props.showLabel && <label htmlFor={this.inputId}>{this.props.label}</label>}
          <ErrorComponent msg={this.props.errorMsg} visibile={this.props.showError} />
      </div>
    );
  }
}
