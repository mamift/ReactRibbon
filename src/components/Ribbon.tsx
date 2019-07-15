
import * as React from 'react'
import './RibbonBar.scss'

export default class Ribbon extends React.Component {
  render() {
    return (
      <div className="ribbon">
      {this.props.children}
      </div>
      )
  }
}