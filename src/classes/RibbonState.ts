import { observable, observe, IObjectDidChange } from 'mobx'
import RibbonToolbar from '../components/RibbonToolbar';

export interface RibbonState {
  activeRibbon: string,
  ribbonTabButtons: string[],
  toolbars: string[],
  registerRibbon: (name: string) => void,
  registerToolbar: (name: string) => void,
  checkTabButtonForToolbar: (name: string) => void,
  visibleToolbar: RibbonToolbar | string
}

const registeredRibbonsArray = observable([]);
const registeredToolbarsArray = observable([]);

var rStateObj: RibbonState = {
  activeRibbon: "", // used to match ribbon tab buttons against their toolbars
  ribbonTabButtons: registeredRibbonsArray,
  toolbars: registeredToolbarsArray,
  registerRibbon: (name: string) => {
    var result = registeredRibbonsArray.add(name)
    // if (!result) throw new Error(`RibbonTabButton '${name}' already registered!`)
  },
  registerToolbar: (name: string) => {
    var result = registeredToolbarsArray.add(name)
    // if (!result) throw new Error(`RibbonToolbar '${name}' already registered!`)
  },
  checkTabButtonForToolbar: (name: string) => {
    if (registeredToolbarsArray.indexOf(name) === -1) {
      throw new Error(`There is no matching RibbonTabButton for RibbonToolbar '${name}'`)
    }
  },
  visibleToolbar: null
}

var ribbonStateObservable = observable(rStateObj)

observe(registeredRibbonsArray, (c: IObjectDidChange) => {
  console.log("New RibbonTabButton: ", c)
})

observe(registeredToolbarsArray, (c: IObjectDidChange) => {
  console.log("New RibbonToolbar: ", c)
  if (rStateObj.visibleToolbar == null) {
    rStateObj.visibleToolbar = (c as any).added[0]
  }
})

export default ribbonStateObservable
