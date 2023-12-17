export class Calculator {
  constructor(public element: HTMLElement) {}

  render() {
    this.element.innerHTML = `<h1>Calculator</h1>`
  }
}
