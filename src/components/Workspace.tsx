import * as React from 'react'

import { withRouter } from 'react-router-dom'

import QuickLaunch from './QuickLaunch'
import './Workspace.scss'

export interface WorkspaceProps {
  showQuickLaunch?: boolean,
}

export default class Workspace extends React.Component<WorkspaceProps, object> {
  render() {
    let showQl = this.props.showQuickLaunch
    let rootClass = "workspace"
    if (showQl) { rootClass = rootClass.appendWithDelimiter("workspaceWithQuickLaunch") }

    return (
      <div className={rootClass}>
        {showQl ? <QuickLaunch /> : null}
        <div className="workspace-content">
          {this.props.children}
        </div>
      </div>
    )
  }

  componentDidMount() {
  }
}