import * as React from 'react'

import FileMenuComponent from '../components/FileMenu'
import BackStageComponent from '../components/BackStage'

export interface BackStageContextObject {
  backStageIsShowing: boolean,
  toggleBackStageVisibility: (context: BackStageContextObject) => void
}

// export class BackStageContextStore implements BackStageContextObject {
//   backStageIsShowing: boolean

//   toggleBackStageVisibility() {
//     this.backStageIsShowing = !this.backStageIsShowing
//   }
// }

export const BackStageContextStore: BackStageContextObject = {
  backStageIsShowing: false,
  toggleBackStageVisibility: (context) => { context.backStageIsShowing = !context.backStageIsShowing }
}

export default React.createContext(BackStageContextStore)