import * as React from 'react'

import { withRouter } from 'react-router-dom'

import QuickLaunchGroup from './QuickLaunchGroup'
import LinkObject from '../classes/LinkObject'

import './QuickLaunch.scss'

export interface QuickLaunchProps {
}

export default class QuickLaunch extends React.Component<QuickLaunchProps, object> {
  render() {
    let defaultLinkObject = new LinkObject('Header link')
    let testingChildren = [new LinkObject('test 1'), new LinkObject('test 2')]

    return (
      <div className="quicklaunch">
        <ul className="navigation">
          <QuickLaunchGroup headerLink={defaultLinkObject} childLinks={testingChildren} />
          <li className="nav-group">
            <div className="title"><a href="link">please do stuff</a></div>
            <ul>
              <li><a href="#">link to nothing</a></li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }

  componentDidMount() {
  }
}