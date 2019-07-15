
import * as React from 'react'

export default class RibbonHeader extends React.Component {
  render() {
    return (
      <div className="header">
        {this.props.children}
      </div>
    )
  }
}