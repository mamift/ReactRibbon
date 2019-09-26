import * as React from 'react'
import { observe, IObjectDidChange } from 'mobx'

// import { withRouter } from 'react-router'

// import RoutingContext, { RoutingContextObject } from '../classes/RoutingContext'

import './RibbonTabButton.scss'

import { observer } from 'mobx-react'
import ribbonState from '../classes/RibbonState'

export interface RibbonTabButtonProps {
  name: string,
  text?: string,
  defaultActive?: boolean,
  color?: string,
  navigateToPathOnClick?: string
}

/**
 * Represents a tab button for the ribbon tab row
 */
@observer
export default class RibbonTabButton extends React.Component<RibbonTabButtonProps, object> {
  private _isMounted: boolean  = false
  private _isCurrentlyActiveTabButton: boolean  = false

  constructor(props: RibbonTabButtonProps) {
    super(props)
    ribbonState.registerRibbon(this.props.name)
    this._isCurrentlyActiveTabButton = this.props.defaultActive || false
    observe(ribbonState, (c) => {
      // todo
    })
  }

  componentDidMount() {
    this._isMounted = true
  }

  get isActive(): boolean {
    const isSetActiveRibbon = ribbonState.activeRibbon == this.props.name;
    if (this._isCurrentlyActiveTabButton)

    if (isSetActiveRibbon) this._isCurrentlyActiveTabButton = false
    return isSetActiveRibbon
  }

  get liClasses(): string {
    let classes = 'ribbon-tabbutton' + ` ${this.isActive ? 'active' : ''}`
    if (this.props.color) {
      classes += `${this.props.color}`
    }
    return classes
  }

  public clickHandler(event: Event) {
    ribbonState.activeRibbon = this.props.name
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