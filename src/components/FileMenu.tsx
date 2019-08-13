import * as React from 'react'

import { BrowserRouter, Route, Link } from 'react-router-dom'
import BackStageContext from '../classes/BackStageContext'

import './FileMenu.scss'

interface FileMenuProps {
  text: string
}

interface FileMenuState {
  isShowing: boolean
}

export default class FileMenu extends React.Component<FileMenuProps, object> {
  private _isFocussed: boolean = false

  state: FileMenuState
  
  constructor(props: FileMenuProps) {
    super(props)
    let initialState: FileMenuState = {
      isShowing: false
    }

    this.state = initialState
  }
  
  get buttonClass(): string {
    return this.state.isShowing ? 'file-menu focus' : 'file-menu'
  }

  clickHandler(event: Event) {
    let newState: FileMenuState = {
      isShowing: !this.state.isShowing
    }

    this.setState(newState)
  }

  render() {
    return (
      <div className="file-menu">
        <Link to={!this.state.isShowing ? "/backstage" : "/home"}>
          <button className={this.state.isShowing ? 'file-menu focus' : 'file-menu'} onClick={ (e?: any) => { this.clickHandler(e) }}>
            {this.props.text}
          </button>
        </Link>
      </div>
    )
  }
}