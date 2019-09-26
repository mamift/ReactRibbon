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

const TestToolbar = () => {
  return (
    <RibbonToolbar name="test">
      <p>this is some text</p>
    </RibbonToolbar>
  )
}

let TestToolbarInstance = (<TestToolbar />)

export const AppLayout = () => (
  <BrowserRouter>
    <div id="app" className="container-fluid">
      <Ribbon>
        <RibbonHeader>
          <FileMenu text="File" />
          <RibbonBar>
            <RibbonTabButton name="summary" defaultActive={true}>Home</RibbonTabButton>
            <RibbonTabGroup color="red">
              <RibbonTabButton name="log">Log</RibbonTabButton>
            </RibbonTabGroup>
            <RibbonTabGroup color="green">
              <RibbonTabButton name="diagnostics">Diagnostics</RibbonTabButton>
            </RibbonTabGroup>
            <RibbonTabGroup color="orange">
              <RibbonTabButton name="report">Report</RibbonTabButton>
            </RibbonTabGroup>
            <RibbonTabGroup color="blue" text="Contextual">
              <RibbonTabButton name="overview">Overview</RibbonTabButton>
              <RibbonTabButton name="another">Another</RibbonTabButton>
            </RibbonTabGroup>
          </RibbonBar>
        </RibbonHeader>

        <RibbonToolbar name="firstup" firstVisible={true}>
          Click a button
        </RibbonToolbar>
        <RibbonToolbar name="summary">
          <Trail />
        </RibbonToolbar>
        <RibbonToolbar name="log">
          log
        </RibbonToolbar>
        <RibbonToolbar name="diagnostics">
          diagnostics
        </RibbonToolbar>
        <RibbonToolbar name="report">
          report
        </RibbonToolbar>
        <RibbonToolbar name="overview">
          overview
        </RibbonToolbar>
        <RibbonToolbar name="another">
          another
        </RibbonToolbar>
      </Ribbon>

      <Route path="/backstage" component={BackStage}/>
      <Route path="/home" />

      <Workspace showQuickLaunch={true}>
        <p>Some content goes here</p>
      </Workspace>

    </div>
  </BrowserRouter>
)

class App extends React.Component {
  render() {
    return <AppLayout />
  }

  componentDidMount() {

  }
}

export default App
