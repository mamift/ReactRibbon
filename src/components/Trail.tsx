import * as React from 'react'
import * as PropTypes from 'prop-types'

import { BrowserRouter, Route, Link, RouteComponentProps } from 'react-router-dom'
import { withRouter } from 'react-router'

import './Trail.scss'

interface TrailProps {
  match: {
    isExact: boolean,
    params: {},
    path: string,
    url: string
  },
  location: {
    hash: string,
    key: string,
    pathname: string,
    search: string,
    state: {} | undefined
  },
  history: History,
  staticContext?: any
}

interface TrailState {
  // add some state props here
}

type WithRouterTrailProps = RouteComponentProps & TrailProps

export class Trail extends React.Component<WithRouterTrailProps, TrailState> {

  constructor(props: WithRouterTrailProps) {
    super(props)
  }

  get homeIcon(): object {
    return {
      fontSize: '1.2em'
    }
  }

  render() {
    let { match, location, history } = this.props
    let pathNameSplit = location.pathname.split('/')
    let locationComponents = pathNameSplit.filter((v, i, a) => !(v.isEmpty()));


    let trailTemplate = (text: string, linkPath: string) => (
      <Link to={linkPath}><i className="fa fa-chevron-right">&nbsp;</i>
        <h3 className="title">
          <span>{text}</span>
        </h3>
      </Link>
    )

    return (
      <div className="trail">
        <div className="trail-breadcrumb">
          <h3 className="title">            
            <Link to="/home"><i className="fa fa-home" style={this.homeIcon}>&nbsp;</i>Home</Link>
          </h3>
          {locationComponents.length > 1 ? 
            (locationComponents.map((v, i, a) => (i == 0) ? (<div />) : trailTemplate('test', v))) :
            (<div />)}
        </div>
      </div>
    );
  }
}

const TrailWithRouter = withRouter(Trail)

export default TrailWithRouter
