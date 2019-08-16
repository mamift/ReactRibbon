
export default class LinkObject {
  constructor(public name: string, public path: string, public route?: string) {
    this.path = path
    this.name = name
    this.route = route
  }
}