import * as React from 'react'

import BackStageContext, { BackStageContextObject } from '../classes/BackStageContext'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import './BackStage.scss'

export default class BackStage extends React.Component {
  private _isVisible: boolean = false

  get backStageHeight(): number {
    return window.innerHeight - 50
  }

  divBackStageClasses(context: BackStageContextObject): string {
    let show: string = context.backStageIsShowing ? 'show' : 'hide'
    return `backstage ${show}`
  }

  get divBackStageStyles(): object {
    return {
      height: `${this.backStageHeight}px`,
      overflow: 'auto',
      display: `${this._isVisible ? 'none' : 'block'}`
    }
  }

  componentDidMount() {

  }

  /**
   * Toggles the visibility 
   */
  public toggleVisibility(): void {
    this._isVisible = !this._isVisible
  }

  render() {
    return (
      <div className="backstage" id="backstage" style={this.divBackStageStyles}>
        <div className="backstage-sidebar">
          <ul>
            <li>Dashboard</li>
            <li>Settings</li>
          </ul>
        </div>
        <div className="backstage-content">
          <p>this is the backstage</p>
        </div>
      </div>
    )
  }
}
