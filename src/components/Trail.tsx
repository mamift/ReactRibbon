import * as React from 'react';

import './Trail.scss'

export default class Trail extends React.Component<object> {

  get homeIcon(): object {
    return {
      fontSize: '1.2em'
    }
  }

  render() {
    return (
      <div className="trail">
        <div className="trail-breadcrumb">
          <h3 className="title">
            <i className="fa fa-home" style={this.homeIcon}>&nbsp;</i>
            <span>Dashboard</span>
          </h3>
          <i className="fa fa-chevron-right">&nbsp;</i>
          <h3 className="title">
            <span>home</span>
          </h3>
        </div>
      </div>
    );
  }
}
