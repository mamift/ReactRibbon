
import * as React from 'react'

export interface Props {
  name: string
  enthusiamLevel?: number
}

function Hello({ name, enthusiamLevel = 1 }: Props) {
  if (enthusiamLevel <= 0) { 
    throw new Error('You could be more enthusiastic!') 
  }

  return (
    <div className="hello">
      Hello {name + getExclamationMarks(enthusiamLevel)}
    </div>
  )
}

export default Hello

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!')
}
