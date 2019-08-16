import * as React from 'react'

import { BrowserRouter, Route, Link, RouteComponentProps } from 'react-router-dom'
import { withRouter } from 'react-router'

import LinkObject from '../classes/LinkObject'

export interface QuickLaunchGroupProps {
  headerLink: LinkObject,
  childLinks?: LinkObject[]
}

interface QuickLaunchState {
  titleTextWidth: number,
  linkTitleEl?: React.RefObject<HTMLDivElement>
}

type QuickLaunchType = RouteComponentProps<{}> & QuickLaunchGroupProps

export class QuickLaunchGroup extends React.Component<QuickLaunchType, QuickLaunchState> {
  constructor(props: QuickLaunchType) {
    super(props)
    this.state = { titleTextWidth: 0, linkTitleEl: React.createRef() }

    if (props.childLinks == null) {
      props.childLinks = []
    }
  }

  get noChildren(): boolean {
    return this.props.childLinks == null
  }

  get getLiClasses(): string {
    return `nav-group ${this.noChildren ? 'no-children' : ''}`.trim()
  }

  get getTitleWidth(): object {
    return {
      width: this.state.titleTextWidth
    }
  }

  componentDidMount() {
  }

  render() {
    let childrenLinks = this.props.childLinks!.map((link) => {
      return (
        <li key={link.name}>
          <Link to={link.path}>{link.name}</Link>
        </li>
      )
    })

    return (
      <li className={this.getLiClasses}>
        <div className="title" ref={this.state.linkTitleEl}>
          <span className="titleFlourish" style={this.getTitleWidth}>&nbsp;</span>
          <Link to={this.props.headerLink.path}>{this.props.headerLink.name}</Link>
        </div>
        <ul>
          {childrenLinks}
        </ul>
      </li>
    )
  }
}

let QuickLaunchGroupWithRouter = withRouter(QuickLaunchGroup)

export default QuickLaunchGroupWithRouter