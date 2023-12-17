export class Calendar {
  constructor(public element: HTMLElement) {}

  render() {
    this.element.innerHTML = `<h1>Calendar</h1>`
  }
}
