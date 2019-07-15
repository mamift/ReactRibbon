import * as React from 'react'

import './RibbonBar.scss'

export interface RibbonBarProps {
}

export default class RibbonBar extends React.Component<RibbonBarProps, object> {
  render() {
    return (
      <div className="ribbon-bar">
        <ul className="ribbon">
          {this.props.children}
        </ul>
      </div>
    )
  }

  componentDidMount() {
    console.log(this.props.children)

    this.props.children
  }
}
