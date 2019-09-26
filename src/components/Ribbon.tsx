import * as React from 'react'
import { observer } from 'mobx-react'

import { BrowserRouter, Route, Link, RouteComponentProps } from 'react-router-dom'
import { withRouter } from 'react-router'

import './RibbonBar.scss'

import RibbonToolbar from './RibbonToolbar'

import state, { RibbonState } from '../classes/RibbonState'

interface RibbonProps {
  innerRef?: React.RefObject<HTMLDivElement>,
  defaultTabButton?: RibbonToolbar
}

type RibbonType = RouteComponentProps<{}> & RibbonProps

export class Ribbon extends React.Component<RibbonType> {
  constructor(props: RibbonType) {
    super(props)
    // console.log(this.props.children)
  }

  get childrenRibbonToolbars() {
    let ribbonToolbars = Array<RibbonToolbar>();

    for (var child of this.props.children as Array<any>) {
      // console.log(typeof child)
    }

    return ribbonToolbars
  }

  componentDidMount() {
    // console.log('innerRef:', this.props.innerRef)
  }

  render() {
    return (
      <div className="ribbon" ref={this.props.innerRef}>
        {this.props.children}
      </div>
    )
  }
}

export let RibbonWithRouter = withRouter(Ribbon)

export default React.forwardRef((props: RibbonProps, ref: React.RefObject<HTMLDivElement>) => {
  return (<RibbonWithRouter innerRef={ref} {...props} />)
})