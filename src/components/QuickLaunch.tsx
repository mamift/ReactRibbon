import * as React from 'react'

import { BrowserRouter, Route, Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

import QuickLaunchGroup from './QuickLaunchGroup'
import LinkObject from '../classes/LinkObject'

import './QuickLaunch.scss'

export interface QuickLaunchProps {
}

export default class QuickLaunch extends React.Component<QuickLaunchProps, object> {
  render() {
    let adminLink = new LinkObject('Administration', '/administration')
    let dashboardLink = new LinkObject('Dashboard', '/dashboard')
    
    let adminChildren = [new LinkObject('test 1', '/test1'), new LinkObject('test 2', '/test2')]
    let dashboardChildren = [new LinkObject('dashboard 1', '/dashboard1'), new LinkObject('dashboard 2', '/dashboard2')]

    return (
      <div className="quicklaunch">
        <ul className="navigation">
          <QuickLaunchGroup headerLink={adminLink} childLinks={adminChildren} />
          <QuickLaunchGroup headerLink={dashboardLink} childLinks={dashboardChildren} />
          {/*<li className="nav-group">
            <div className="title"><a href="link">please do stuff</a></div>
            <ul>
              <li><a href="#">link to nothing</a></li>
            </ul>
          </li>*/}
        </ul>
      </div>
    )
  }

  componentDidMount() {
  }
}