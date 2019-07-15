import * as React from 'react'

// import { withRouter } from 'react-router'

// import RoutingContext, { RoutingContextObject } from '../classes/RoutingContext'

import './RibbonTabButton.scss'

export interface RibbonTabButtonProps {
  name: string,
  text: string,
  defaultActive?: boolean,
  color?: string,
  navigateToPathOnClick?: string
}

/**
 * Represents a tab button for the ribbon tab row
 */
export default class RibbonTabButton extends React.Component<RibbonTabButtonProps, object> {
  private _isMounted: boolean  = false
  private _isCurrentlyActiveTabButton: boolean  = false

  constructor(props: RibbonTabButtonProps) {
    super(props)
  }

  componentDidMount() {
    this._isMounted = true
  }

  get isCurrentlyActiveTabButton(): boolean {
    return this._isCurrentlyActiveTabButton
  }

  get isActive(): boolean {
    return this._isMounted ? (this.props.defaultActive || false) : this._isCurrentlyActiveTabButton
  }

  get liClasses(): string {
    let classes = 'ribbon-tabbutton' + ` ${this.isActive ? 'active' : ''}`
    if (this.props.color) {
      classes += `${this.props.color}`
    }
    return classes
  }

  public clickHandler(event: Event) {
    console.log('clicked, by ', event.target)

    if (this.props.children) {
      console.log(this.props.children)
    }
  }

  /**
   * Render the component
   */
  render() {
    return (
      <li className={this.liClasses}>
        <span className="title" onClick={ (e?: any) => this.clickHandler(e) }>{this.props.children || this.props.text}</span>
      </li>
    )
  }
}