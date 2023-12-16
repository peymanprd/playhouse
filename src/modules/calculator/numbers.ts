import { Keys } from './keys'

class Numbers extends Keys {
  constructor(public element?: HTMLDivElement) {
    super(element)
  }
  
  render() {}
}

export { Numbers }

export default Object.freeze(new Numbers())
