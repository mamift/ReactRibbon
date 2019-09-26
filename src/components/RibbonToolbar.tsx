import * as React from 'react'
import { observe, IObjectDidChange } from 'mobx'
import { observer } from 'mobx-react'

import './RibbonToolbar.scss'

import ribbonState from '../classes/RibbonState'

export interface RibbonToolbarProps {
  name: string,
  firstVisible?: boolean
}

export interface RibbonToolbarState {
  isShowing: boolean
}

@observer
export default class RibbonToolbar extends React.Component<RibbonToolbarProps, RibbonToolbarState> {
  private isShowing: boolean

  constructor(props: RibbonToolbarProps, state: RibbonToolbarState) {
    super(props, state)
    if (this.props.name.isEmpty()) throw new Error('Empty name for RibbonToolbar')
    ribbonState.registerToolbar(this.props.name)
    // ribbonState.checkTabButtonForToolbar(this.props.name)
  }

  componentDidMount() {
    var self = this
    this.setState((state) => {
      return {isShowing: self.props.firstVisible || false}
    })

    observe(ribbonState, (c: IObjectDidChange) => {
      
      const newValue = (c as any).newValue;
      if (c.type == "update" && c.name == "activeRibbon") {
        console.log(newValue);
        const willShow = newValue == self.props.name
        self.setState((state) => {
          return { isShowing: willShow }
        })
      }
    })
  }

  get divClasses(): string {
    const cssClass: string = "toolbar"
    
    if (this.state) {
      let finalCssClasses = `${cssClass} ${this.state.isShowing ? ' ' : 'hidden'}`
      return finalCssClasses
    }
    return cssClass
  }

  render() {
    return (
      <div className={this.divClasses}>
        {this.props.children}
      </div>
    )
  }
}
