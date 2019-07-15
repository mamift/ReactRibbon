import * as React from 'react';

import './RibbonTabGroup.scss'

export interface RibbonTabGroupProps {
  text?: string,
  name?: string,
  defaultIsVisible?: boolean,
  color?: string
}

export default class RibbonTabGroup extends React.Component<RibbonTabGroupProps, object> {
  private _isVisible: boolean = false

  constructor(props: RibbonTabGroupProps) {
    super(props)
  }

  get showNoSubgroupTitle(): boolean {
    return this.props.text == null
  }

  get divClasses(): string {
    return !this.showNoSubgroupTitle ? 'subgroup-title' : 'no-subgroup-title'
  }

  get divStyles(): object {
    return {
      'visibility': this._isVisible ? 'visible' : 'hidden'
    }
  }

  get liClasses(): string {
    let classes = 'ribbon-group'// + ` ${!this._isVisible ? 'hidden' : ''}`
    if (this.props.color) {
      classes += ` ${this.props.color}`
    }
    return classes
  }

  render() {
    return (
      <li className={this.liClasses}>
        <div className={this.divClasses}>{this.props.text}</div>
        <ul className="ribbon-subgroup">
          {this.props.children}
        </ul>
      </li>
    );
  }
}
