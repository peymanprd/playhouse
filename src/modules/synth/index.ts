export class Synth {
  constructor(public element: HTMLElement) {}

  render() {
    this.element.innerHTML = `<h1>Synth</h1>`
  }
}
