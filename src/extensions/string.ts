interface String {
  appendWithDelimiter(appendage: string, delimiter?: string): string
  isEmpty(): boolean
}

String.prototype.appendWithDelimiter = function(appendage: string, delimiter: string = " "): string {
  return this + delimiter + appendage
}

String.prototype.isEmpty = function(): boolean {
  let r = /^\s+$/g.compile()
  let self = this as string
  return self == "" || self == null || !r.test(self)
}