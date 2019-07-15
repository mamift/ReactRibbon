import * as React from 'react'

import './RibbonToolbar.scss'

export interface RibbonToolbarProps {
  name: string
}

export default class RibbonToolbar extends React.Component<RibbonToolbarProps, object> {
  constructor(props: RibbonToolbarProps) {
    super(props)
  }

  get divClasses(): string {
    return 'toolbar'
  }

  render() {
    return (
      <div className={this.divClasses}>
        {this.props.children}
      </div>
    )
  }
}
