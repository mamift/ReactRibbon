import * as React from 'react'
import './App.scss'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import './extensions/string'

import Auth from './classes/Auth'

import Home from './components/Home'

import Ribbon from './components/Ribbon'
import RibbonHeader from './components/RibbonHeader'
import FileMenu from './components/FileMenu'
import RibbonBar from './components/RibbonBar'
import RibbonTabGroup from './components/RibbonTabGroup'
import RibbonTabButton from './components/RibbonTabButton'
import RibbonToolbar from './components/RibbonToolbar'

import Trail from './components/Trail'
import BackStage from './components/BackStage'
import QuickLaunch from './components/QuickLaunch'
import Workspace from './components/Workspace'

import RoutingContext, { RoutingContextStore } from './classes/RoutingContext'
import BackStageContext, { BackStageContextStore } from './classes/BackStageContext'

const RouteList = [
  {
    path: "/",
    exact: true,
    main: () => <Home />
  },
  {
    path: "/summary",
    exact: true,
    main: () => <div>Main summary goes here</div>
  }
]

export const AppLayout = () => (
  <BrowserRouter>
    <div id="app" className="container-fluid">
      <Ribbon>
        <RibbonHeader>
          <FileMenu text="Home"><Link to="/">Home</Link></FileMenu>
          <RibbonBar>
            <RibbonTabButton name="summary" text="Summary">
              Summary
            </RibbonTabButton>
            <RibbonTabGroup defaultIsVisible={false} color="red">
              <RibbonTabButton text="Log" name="logBtn">
                Log
              </RibbonTabButton>
            </RibbonTabGroup>
            <RibbonTabGroup defaultIsVisible={true} color="blue" text="group1">
              <RibbonTabButton text="" name="btn1">Overview</RibbonTabButton>
              <RibbonTabButton text="Butto2!" name="btn2" />
            </RibbonTabGroup>
          </RibbonBar>
        </RibbonHeader>
        <RibbonToolbar name="TrailToolbar">
          <Trail />
        </RibbonToolbar>
      </Ribbon>

      <BackStage />

      <Workspace showQuickLaunch={true}>
        <p>OI! some content goes here</p>  
      </Workspace>
    </div>
  </BrowserRouter>
)

class App extends React.Component {
  render() {
    return <AppLayout />
  }

  componentDidMount() {
    var authSvc = new Auth()
    // authSvc.login()
  }
}

export default App
