export class TikTakToe {
  constructor(public element: HTMLElement) {}

  render() {
    this.element.innerHTML = `<h1>TikTakToe</h1>`
  }
}
