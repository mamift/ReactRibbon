import * as React from 'react'

import { BrowserRouter, Route, Link } from 'react-router-dom'

import LinkObject from '../classes/LinkObject'

export interface QuickLaunchGroupProps {
  headerLink: LinkObject,
  childLinks?: LinkObject[]
}

export default class QuickLaunchGroup extends React.Component<QuickLaunchGroupProps, object> {
  constructor(props: QuickLaunchGroupProps) {
    super(props)

    if (props.childLinks == null) {
      props.childLinks = []
    }
  }

  get noChildren(): boolean {
    return this.props.childLinks == null
  }

  get liClasses(): string {
    return `nav-group ${this.noChildren ? 'no-children' : ''}`.trimRight()
  }

  render() {
    let childrenLinks = this.props.childLinks!.map((link) => {
      return (
        <li key={link.name}>
          <a href="#">{link.name}</a>
        </li>
      )
    })
    return (
      <li className={this.liClasses}>
        <div className="title"><a href="#">{this.props.headerLink.name}</a></div>
        <ul>
          {childrenLinks}
        </ul>
      </li>
    )
  }
}
