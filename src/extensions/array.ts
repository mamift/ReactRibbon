
interface Array<T> {
  add(thing: T): boolean
}

Array.prototype.add = function<T>(thing: T) {
  const isNotPresent = this.indexOf(thing) === -1
  
  if (isNotPresent) {
    this.push(thing)
    return true; // added successfully
  } {
    return false;
  }
}