import * as React from 'react'
import * as History from 'history'
import { BrowserRouter, Route, Link } from 'react-router-dom'

export interface RoutingContextObject {
  history: typeof History,
  browserRouter?: typeof BrowserRouter
}

export const RoutingContextStore: RoutingContextObject = {
  history: History,
  browserRouter: undefined
}

export default React.createContext(RoutingContextStore)